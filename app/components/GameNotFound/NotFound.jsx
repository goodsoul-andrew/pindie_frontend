import Styles from './GameNotFound.module.css';
import { NotFoundImage } from './not-found.jsx';

export const NotFound = (props) => {
	return (
		<div className={Styles['not-found']}>
			<NotFoundImage />
			<h2 className={Styles['not-found__text']}>{props.text}</h2>
		</div>
	);
};
