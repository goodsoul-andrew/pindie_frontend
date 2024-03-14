import { Card } from './Card';
import Styles from './Cards.module.css';

export const CardsList = (props) => {
	const games = props.data;
	//console.log(props.data[0].title, props.data[0].users_permissions_users.length);
	return (
		<section className={Styles['list__section']}>
			<h2 className={Styles['list__section__title']} id={props.id}>
				{props.title}
			</h2>
			<ul className={Styles['cards__list']}>
				{games.map((item) => {
					return <Card {...item} />;
				})}
			</ul>
			;
		</section>
	);
};
