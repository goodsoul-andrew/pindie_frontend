import { CardsList } from '@/app/components/CardsList/CardsList';
import { Promo } from '@/app/components/Promo/Promo';
import { getAllGamesData } from '@/app/api/data-utils';

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
	const games = await getAllGamesData();
	return (
		<main>
			<CardsList id={params.category} title='Все игры' data={games} />
			<Promo />
		</main>
	);
}
