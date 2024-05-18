'use client';
import { CardsListSection } from '@/app/components/CardsListSection/CardsListSection';
import { useGetAllGames } from '@/app/api/hooks';
import { isDataOk } from '@/app/api/utils';
import { Preloader } from '@/app/components/Preloader/Preloader';

export default function AllGamesPage(props) {
	const games = useGetAllGames([]);
	if (games !== null) {
		//console.log(games);
		let printedGames = games.map((el) => {
			return { id: el.id, title: el.title, description: el.description, link: el.link, image: el.image, rating: 0 };
		});
		//console.log(printedGames);
	}
	return (
		<main>
			<CardsListSection id='all' title='Все игры' data={games} />
		</main>
	);
}
