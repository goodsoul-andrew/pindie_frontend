import { CardsList } from '@/app/components/CardsListSection/CardsList';
import { Promo } from '@/app/components/Promo/Promo';
import { getGamesByCategoryData } from '@/app/api/data-utils';

export default async function AllGamesPage(props) {
	const params = props.params;
	const titles = {
		new: 'Новинки',
		popular: 'Популярные',
		pixel: 'Пиксельные',
		shooter: 'Шутеры',
		TDS: 'TDS',
		runner: 'Раннеры'
	};
	const games = await getGamesByCategoryData();
	return (
		<main>
			<CardsList id={params.category} title='Все игры' data={games} />
			<Promo />
		</main>
	);
}
