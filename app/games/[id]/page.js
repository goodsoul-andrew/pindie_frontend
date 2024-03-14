'use client';
import { getGameDataById } from '@/app/api/data-utils';
import { useState, useEffect } from 'react';
import { Preloader } from '@/app/components/Preloader/Preloader';
import { GameNotFound } from '@/app/components/GameNotFound/GameNotFound';
import { isResponseOk } from '@/app/api/utils';
import { getMe, getJWT, removeJWT, checkIfUserVoted, vote } from '@/app/api/users-utils';

import Styles from '../Game.module.css';

export default function GamePage(props) {
	const params = props.params;

	const [game, setGame] = useState(null);
	const [isAuthorized, setIsAuthorized] = useState(false);
	const [currentUser, setCurrentUser] = useState(null);
	const [preloaderVisible, setPreloaderVisible] = useState(true);
	const [isVoted, setIsVoted] = useState(false);

	const handleVote = async () => {
		const jwt = getJWT();
		let usersIdArray = game.users_permissions_users.length ? game.users_permissions_users.map((user) => user.id) : [];
		usersIdArray.push(currentUser.id);
		const response = await vote(game.id, jwt, usersIdArray);
		if (isResponseOk(response)) {
			setIsVoted(true);
			let currGame = game;
			currGame.users_permissions_users.push(currentUser);
			setGame(currGame);
		}
	};

	useEffect(() => {
		async function fetchData() {
			const game = await getGameDataById(params.id);
			//console.log(game);
			if (isResponseOk(game)) {
				setGame(game);
			} else {
				setGame(null);
			}
			setPreloaderVisible(false);
		}
		fetchData();
	}, [currentUser]);

	useEffect(() => {
		const jwt = getJWT();
		if (jwt && !currentUser) {
			getMe(jwt).then((userData) => {
				if (isResponseOk(userData)) {
					setIsAuthorized(true);
					setCurrentUser(userData);
					//console.log(currentUser);
				} else {
					setIsAuthorized(false);
					removeJWT();
				}
			});
		}
	});

	useEffect(() => {
		if (currentUser && game) {
			setIsVoted(checkIfUserVoted(game, currentUser.id));
		} else {
			setIsVoted(false);
		}
	}, [currentUser, game]);

	//const game = await getGameDataById(params.id);
	//console.log(game);

	if (game) {
		//console.log(game.title, game.users_permissions_users.length);
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
							<span className={Styles['about__accent']}>{game.users_permissions_users.length}</span>
						</p>
						<button
							disabled={!isAuthorized || isVoted}
							className={`button ${Styles['about__vote-button']}`}
							onClick={handleVote}
						>
							{isVoted ? 'Голос учтён' : 'Голосовать'}
						</button>
					</div>
				</section>
			</main>
		);
	} else if (preloaderVisible) {
		return <Preloader />;
	} else {
		return (
			<section className={Styles['game']}>
				<GameNotFound />
			</section>
		);
	}
}
