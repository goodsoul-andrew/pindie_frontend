import { Banner } from './components/Banner/Banner.jsx';
import {Promo} from './components/Promo/Promo.jsx';
import { CardsList } from './components/CardsList/CardsList';
import { PopularCardsList } from './components/CardsList/Popular/PopularCardList';
import { NewCardsList } from './components/CardsList/New/NewCardsList'; 

export default function Home() {
	return (
		<main>
			<Banner />
			<CardsList id='popular' title='Популярные' />
			<CardsList id='new' title='Новинки' />
			<Promo />
		</main>
	);
}
