"use client";
import { CardsListSection } from '@/app/components/CardsListSection/CardsListSection';
import { useGetAllGames } from '@/app/api/hooks';
import { isDataOk } from '@/app/api/utils';
import { Preloader } from '@/app/components/Preloader/Preloader';

export default function AllGamesPage(props) {
	const games = useGetAllGames([]);
	return (
		<main>
			<CardsListSection id='all' title='Все игры' data={games} />
		</main>
	);
}
