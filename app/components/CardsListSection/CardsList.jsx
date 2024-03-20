import { Card } from './Card';
import Styles from './Cards.module.css';

export const CardsList = (props) => {
	const games = props.data;
	//console.log(games);
	return (
		<section className={Styles['list__section']}>
			<ul className={Styles['cards__list']}>
				{games.map((item, i) => {
					return (
						<li className={Styles.cards__list__item} key={i}>
							<Card {...item} />
						</li>
					);
				})}
			</ul>
			;
		</section>
	);
};
