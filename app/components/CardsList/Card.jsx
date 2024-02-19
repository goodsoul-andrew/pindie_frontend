import Styles from "./Cards.module.css"

export const Card = (props) => {
  return (
		<li className={Styles.cards__list__item}>
			<a href={props.link} className={Styles.card__list__link}>
				<article className={Styles.card}>
					<img
						src={props.image}
						alt=""
						className={Styles.card__image}
					/>
					<div className={Styles.card__content__block}>
						<h3 className={Styles.card__title}>{props.title}</h3>
						<p className={Styles.card__description}>
							{props.description}
						</p>
						<div className={Styles.card__info__container}>
							<p className={Styles.card__author}>
								Автор: <span className={Styles.card__accent}>{props.developer}</span>
							</p>
							<p className={Styles.card__votes}>
								Голосов на сайте: <span className={Styles.card__accent}>{props.votes}</span>
							</p>
						</div>
					</div>
				</article>
			</a>
		</li>
	);
}