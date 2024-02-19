import { NewCardsFragment } from "./NewCardsFragment";
import Styles from "../Cards.module.css"

export const NewCardsList = () => {
  return (
		<section className={Styles.list__section}>
			<h2 className={Styles.list__section__title} id='new'>
				Новинки
			</h2>
			<ul className={Styles.cards__list}>
        <NewCardsFragment/>
      </ul>
		</section>
	);
}