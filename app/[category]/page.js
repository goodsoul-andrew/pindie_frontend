import { CardsList } from '../components/CardsList/CardsList';
import { Promo } from '../components/Promo/Promo';
import { getGamesDataByCategory } from '../api/data-utils';

export default async function CategoryPage(props) {
	const params = props.params;
	const titles = {
		new: 'Новинки',
		popular: 'Популярные',
		pixel: 'Пиксельные',
		shooter: 'Шутеры',
		TDS: 'TDS',
		runner: 'Раннеры'
	};
	const games = await getGamesDataByCategory(params.category);
	return (
		<main>
			<CardsList id={params.category} title={titles[params.category]} data={games} />
			<Promo />
		</main>
	);
}
