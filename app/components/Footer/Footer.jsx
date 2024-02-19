import Styles from "./Footer.module.css"

export const Footer = () => {
	return (
		<footer className={Styles.footer}>
			<a href='./index.html' className={Styles.footer__logo}>
				<span className={Styles.footer__logo__name}>pindie</span>
				<span className={Styles.footer__logo__copy}>, XXI век</span>
			</a>
			<ul className={Styles.social__list}>
				<li className={Styles.footer__social__list__link}>
					<a href='' className={'button' + Styles.footer__social__list__link}>
						YT
					</a>
				</li>
				<li className={Styles.footer__social__list__link}>
					<a href='' className={'button' + Styles.footer__social__list__link}>
						ВК
					</a>
				</li>
				<li className={Styles.footer__social__list__link}>
					<a href='' className={'button' + Styles.footer__social__list__link}>
						TG
					</a>
				</li>
			</ul>
		</footer>
	);
};
