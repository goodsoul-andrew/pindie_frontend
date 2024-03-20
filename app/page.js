'use client';
import { Banner } from './components/Banner/Banner.jsx';
import { Promo } from './components/Promo/Promo.jsx';
import { CardsListSection } from './components/CardsListSection/CardsListSection.jsx';
import { useGetGamesByCategory } from './api/hooks.js';
import { Preloader } from './components/Preloader/Preloader.jsx';
import { isDataOk } from './api/utils.js';

export default function Home() {
	//const newGames = await getGamesByCategory('new');
	//const popularGames = await getGamesByCategory('popular');
	const newGames = useGetGamesByCategory('new', []);
	const popularGames = useGetGamesByCategory('popular', []);
	//console.log(newGames);
	if (isDataOk(newGames) && isDataOk(popularGames)) {
		return (
			<main>
				<Banner />
				<CardsListSection type='slider' id='popular' title='Популярные' data={popularGames} />
				<CardsListSection type='slider' id='new' title='Новинки' data={newGames} />
				<Promo />
			</main>
		);
	} else {
		return (
			<main>
				<Banner />
				<Preloader />
				<Promo />
			</main>
		);
	}
}
