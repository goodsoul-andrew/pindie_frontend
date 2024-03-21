'use client';
import { CardsListSection } from '../components/CardsListSection/CardsListSection';
import { isDataOk } from '../api/utils';
import { useGetGamesByCategory } from '../api/hooks';
import { CategoryNotFound } from '../components/GameNotFound/CategoryNotFound';
import { Preloader } from '@/app/components/Preloader/Preloader';

export default function CategoryPage(props) {
	const params = props.params;
	//console.log(params);
	const titles = {
		new: 'Новинки',
		popular: 'Популярные',
		pixel: 'Пиксельные',
		shooter: 'Шутеры',
		TDS: 'TDS',
		runner: 'Раннеры'
	};
	const games = useGetGamesByCategory(params.category, []);
	//console.log('games', games, isDataOk(games));
	if (isDataOk(games)) {
		return (
			<main>
				<CardsListSection id={params.category} title={titles[params.category]} data={games} />
			</main>
		);
	} else if (games == null) {
		return (
			<main>
				<Preloader />
			</main>
		);
	} else {
		//console.log(games);
		return (
			<main>
				<CategoryNotFound />
			</main>
		);
	}
}
