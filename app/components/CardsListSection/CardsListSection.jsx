import Styles from './Cards.module.css';
import { CardsList } from './CardsList';
import { CardsSlider } from './CardsSlider';
import { Preloader } from '../Preloader/Preloader';
import { isDataOk } from '@/app/api/utils';


export const CardsListSection = (props) => {
	if (isDataOk(props.data)) {
		return (
			<section className={Styles['list__section']}>
				<h2 className={Styles['list__section__title']} id={props.id}>
					{props.title}
				</h2>
				{props.type === 'slider' ? <CardsSlider data={props.data} /> : <CardsList data={props.data} />}
			</section>
		);
	}
	else {
		return (
			<section className={Styles['list__section']}>
				<h2 className={Styles['list__section__title']} id={props.id}>
					{props.title}
				</h2>
				<Preloader/>
			</section>
		);
	}
};
