import { Card } from './Card';
import Styles from './Cards.module.css';
import { getGamesByCategory } from '@/app/data/data-utils';


export const CardsList = (props) => {
	return (
		<section className={Styles['list__section']}>
			<h2 className={Styles['list__section__title']} id={props.id}>
				{props.title}
			</h2>
			<ul className={Styles['cards__list']}>
				{getGamesByCategory(props.id).map((item) => {
					return (
						<Card {...item}/>
					);
				})}
			</ul>
			;
		</section>
	);
};


/*
<Card
	title={item.title}
	developer={item.developer}
	description={item.description}
	image={item.image}
	link={item.link}
	users={item.users}
	votes={item.votes}
/>
*/