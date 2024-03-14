"use client";
import { useState, useEffect } from "react";
import Styles from "./Promo.module.css"

export const Promo = () => {
	let [codeIsVisible, setCodeIsVisible] = useState(false);
	useEffect(() => {
		let timeout;
		if (codeIsVisible) {
			timeout = setTimeout(() => {
				setCodeIsVisible(false);
			}, 5000);
		}
		return () => {
			clearTimeout(timeout);
		};
	}, [codeIsVisible]); 
  return (
		<section className={Styles.promo}>
			<div className='promo__description__block'>
				<h2 className={Styles.promo__title}>Твой промо-код</h2>
				<p className={Styles.promo__description}>
					Скидка на все курсы Яндекс Практикума для пользователей нашего сайта!
				</p>
				<button className={'button ' + Styles.promo__button} onClick={() => setCodeIsVisible(true)}>
					{codeIsVisible ? 'WEBTEENS10' : 'Получить Код'}
				</button>
			</div>
			<img src='./images/promo-illustration.svg' alt='Собака' className={Styles.promo__image} />
		</section>
	);
}