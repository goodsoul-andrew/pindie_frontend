'use client';
import { usePindieStore } from '@/app/store/app-store';
import { isDataOk } from '../api/utils';
import { Preloader } from '../components/Preloader/Preloader';
import { useGetAllGames } from '../api/hooks';
import { CardsListSection } from '../components/CardsListSection/CardsListSection';
import Styles from './MyProfile.module.css';
//import test_games from "@/app/api/legacy_data.json"

export default function MyProfilePage(props) {
	const authContext = usePindieStore();
	const user = authContext.user;
	const games = useGetAllGames([user]);
	//console.log(user);
	if (isDataOk(user)) {
		//console.log(user);
		let myGames = null;
		if (isDataOk(games)) {
			myGames = games.filter((game) => {
				return game.users.find((u) => {
					return u.email === user.email;
				});
			});
		}
		//console.log(myGames);
		return (
			<main>
				<div className={Styles['info__container']}>
					<div className={Styles['field__wrapper']}>
						<p className={Styles['field__title']}>Email</p>
						<p className={Styles['field__value']}>{user.email}</p>
					</div>
					<div className={Styles['field__wrapper']}>
						<p className={Styles['field__title']}>Имя пользователя</p>
						<p className={Styles['field__value']}>{user.username}</p>
					</div>
				</div>
				<CardsListSection type='slider' id='my_games' data={myGames} title='Избранные игры'></CardsListSection>
			</main>
		);
	} else {
		return <Preloader />;
	}
}
