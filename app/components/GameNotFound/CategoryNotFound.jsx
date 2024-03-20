import Styles from './GameNotFound.module.css';
import { NotFoundImage } from './not-found.jsx';

export const CategoryNotFound = () => {
	return (
		<div className={Styles['not-found']}>
			<NotFoundImage />
			<h2 className={Styles['not-found__text']}>Игр такой категории тут нет :(</h2>
		</div>
	);
};
