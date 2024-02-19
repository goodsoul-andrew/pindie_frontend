import Styles from '../Cards.module.css';
import GameCard from '../Card';

export const PopularCardsFragment = () => {
	return (
		<>
			<li className={Styles.cards__list__item}>
				<a href='/game-id.html' className={Styles.card__list__link}>
					<article className={Styles.card}>
						<img
							src='https://code.s3.yandex.net/teens/pindie-games/cristal-keeper/cover.png'
							alt=''
							className={Styles.card__image}
						/>
						<div className={Styles.card__content__block}>
							<h3 className={Styles.card__title}>Crystal Kepper</h3>
							<p className={Styles.card__description}>
								Управляй боевым дроном, чтобы любой ценой защитить кристалл от враждебных космо-слизней.
							</p>
							<div className={Styles.card__info__container}>
								<p className={Styles.card__author}>
									Автор: <span className={Styles.card__accent}>Lonely Baobab</span>
								</p>
								<p className={Styles.card__votes}>
									Голосов на сайте: <span className={Styles.card__accent}>20</span>
								</p>
							</div>
						</div>
					</article>
				</a>
			</li>
			<li className={Styles.cards__list__item}>
				<a href='/game-id.html' className={Styles.card__list__link}>
					<article className={Styles.card}>
						<img
							src='https://code.s3.yandex.net/teens/pindie-games/dangeons-n-caves-prologue/cover.png'
							alt=''
							className={Styles.card__image}
						/>
						<div className={Styles.card__content__block}>
							<h3 className={Styles.card__title}>Dangeons 'n' Caves</h3>
							<p className={Styles.card__description}>
								Безымянный герой исследует пещеры и подземелья, чтобы найти больше информации о себе.
							</p>
							<div className={Styles.card__info__container}>
								<p className={Styles.card__author}>
									Автор: <span className={Styles.card__accent}>F-Style</span>
								</p>
								<p className={Styles.card__votes}>
									Голосов на сайте: <span className={Styles.card__accent}>10</span>
								</p>
							</div>
						</div>
					</article>
				</a>
			</li>
			<li className={Styles.cards__list__item}>
				<a href='/game-id.html' className={Styles.card__list__link}>
					<article className={Styles.card}>
						<img
							src='https://code.s3.yandex.net/teens/pindie-games/defence-of-crystal/cover.png'
							alt=''
							className={Styles.card__image}
						/>
						<div className={Styles.card__content__block}>
							<h3 className={Styles.card__title}>Defence of Crystal</h3>
							<p className={Styles.card__description}>
								Защищай магический кристалл от монстров и уничтожай кладбища, чтобы спасти Землю, которую поглотил мрак.
							</p>
							<div className={Styles.card__info__container}>
								<p className={Styles.card__author}>
									Автор: <span className={Styles.card__accent}>Mastwe</span>
								</p>
								<p className={Styles.card__votes}>
									Голосов на сайте: <span className={Styles.card__accent}>20</span>
								</p>
							</div>
						</div>
					</article>
				</a>
			</li>
		</>
	);
};
