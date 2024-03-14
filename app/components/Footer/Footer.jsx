'use client';
import Styles from './Footer.module.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const Footer = () => {
	const pathname = usePathname();
	//console.log(pathname);
	return (
		<footer className={Styles.footer}>
			{pathname === '' ? (
				<div>
					<span className={Styles.footer__logo__name}>pindie</span>
					<span className={Styles.footer__logo__copy}>, XXI век</span>
				</div>
			) : (
				<Link href='./' className={Styles.footer__logo}>
					<span className={Styles.footer__logo__name}>pindie</span>
					<span className={Styles.footer__logo__copy}>, XXI век</span>
				</Link>
			)}
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
