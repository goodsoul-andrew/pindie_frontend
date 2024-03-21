"use client";
import { usePindieStore } from '@/app/store/app-store';
import { isDataOk } from '../api/utils';
import { Preloader } from '../components/Preloader/Preloader';
import { useGetAllGames } from '../api/hooks';
import { CardsListSection } from '../components/CardsListSection/CardsListSection';
import Styles from "./MyProfile.module.css"
import test_games from "@/app/api/legacy_data.json"

export default function MyProfilePage(props) {
  const authContext = usePindieStore();
  const user = authContext.user;
  //const games = useGetAllGames([]);
  if (isDataOk(user)) {
    return (
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
		);
  }
  else {
    return <Preloader/>;
  }
}