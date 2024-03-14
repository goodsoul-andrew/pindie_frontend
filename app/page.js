import { Banner } from './components/Banner/Banner.jsx';
import { Promo } from './components/Promo/Promo.jsx';
import { CardsList } from './components/CardsList/CardsList.jsx';
import { getGamesDataByCategory } from '@/app/api/data-utils.js';

export default async function Home() {
	const newGames = await getGamesDataByCategory('new');
	const popularGames = await getGamesDataByCategory('popular');
	//console.log(newGames[0].title, newGames[0].users_permissions_users.length);
	return (
		<main>
			<Banner />
			<CardsList id='popular' title='Популярные' data={popularGames} />
			<CardsList id='new' title='Новинки' data={newGames} />
			<Promo />
		</main>
	);
}
