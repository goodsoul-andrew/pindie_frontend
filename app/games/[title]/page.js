'use client';
import { usePindieStore } from '@/app/store/app-store';
import { useState, useEffect } from 'react';
import { Preloader } from '@/app/components/Preloader/Preloader';
import { GameNotFound } from '@/app/components/GameNotFound/GameNotFound';
import { isResponseOk, isDataOk } from '@/app/api/utils';
import { checkIfUserVoted, vote } from '@/app/api/users-utils';
import { useGetGameById, useGetGameByTitle } from '@/app/api/hooks';

import Styles from '../Game.module.css';

export default function GamePage(props) {
	const params = props.params;

	let [game, setGame] = useState(null);
	const [isVoted, setIsVoted] = useState(false);
	const authContext = usePindieStore();
	const currentUser = authContext.user;
	//console.log(params.id)
	//game = useGetGameById(params.id, [currentUser]);
	game = useGetGameByTitle(params.title, [currentUser]);
	//console.log("GAME GOT", game instanceof Error, isResponseOk(game), game);
	//console.log(game)

	const handleVote = async () => {
		//console.log(game);
		const jwt = authContext.token;
		let usersArray = game.users.length ? game.users : [];
		usersArray.push(currentUser);
		const response = await vote(game._id, jwt, usersArray);
		if (isResponseOk(response)) {
			setIsVoted(true);
			let currGame = game;
			//currGame.users.push(currentUser);
			setGame(currGame);
		}
	};

	useEffect(() => {
		if (currentUser && isDataOk(game)) {
			setIsVoted(checkIfUserVoted(game, currentUser._id));
		} else {
			//console.log("?????")
			setIsVoted(false);
		}
	}, [currentUser, game]);

	//const game = await getGameById(params.id);
	//console.log(game);

	if (isDataOk(game)) {
		//console.log('GAME: ', game, isResponseOk(game));
		return (
			<main className='main'>
				<section className={Styles['game']}>
					<iframe className={Styles['game__iframe']} src={game.link}></iframe>
				</section>
				<section className={Styles['about']}>
					<h2 className={Styles['about__title']}>{game.title}</h2>
					<div className={Styles['about__content']}>
						<p className={Styles['about__description']}>{game.description}</p>
						<div className={Styles['about__author']}>
							<p>
								Автор:
								<span className={Styles['about__accent']}>{game.developer}</span>
							</p>
						</div>
					</div>
					<div className={Styles['about__vote']}>
						<p className={Styles['about__vote-amount']}>
							За игру уже проголосовали:
							<span className={Styles['about__accent']}>{game.users.length}</span>
						</p>
						<button
							disabled={!authContext.isAuth || isVoted}
							className={`button ${Styles['about__vote-button']}`}
							onClick={handleVote}
						>
							{isVoted ? 'Голос учтён' : 'Голосовать'}
						</button>
					</div>
				</section>
			</main>
		);
	} else if (game === null) {
		return <Preloader />;
	} else {
		return (
			<section className={Styles['game']}>
				<GameNotFound />
			</section>
		);
	}
}
