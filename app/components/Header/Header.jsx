'use client';
import { useEffect, useState } from 'react';
import Styles from './Header.module.css';
import { Overlay } from '../Overlay/Overlay';
import { Popup } from '../Popup/Popup';
import { AuthForm } from '../AuthForm/AuthForm';
import { usePathname } from 'next/navigation';
import { getMe, getJWT, removeJWT } from '@/app/api/users-utils';
import Link from 'next/link';
import { isResponseOk } from '@/app/api/utils';

export const Header = () => {
	const [popupIsOpened, setPopupIsOpened] = useState(false);
	const [isAuthorized, setIsAuthorized] = useState(false);
	const openPopup = () => {
		setPopupIsOpened(true);
	};
	const closePopup = () => {
		setPopupIsOpened(false);
		//console.log("close");
	};
	const logOut = () => {
		setIsAuthorized(false);
		removeJWT();
	};
	const pathname = usePathname();

	useEffect(() => {
		const jwt = getJWT();
		if (jwt) {
			getMe(jwt).then((userData) => {
				if (isResponseOk(userData)) {
					setIsAuthorized(true);
				} else {
					setIsAuthorized(false);
					removeJWT();
				}
			});
		}
	});

	return (
		<header className={Styles.header}>
			{pathname === '' ? (
				<img className={Styles.logo__image} src='./images/logo.svg' alt='Логотип Pindie' />
			) : (
				<Link href='/' className={Styles.logo}>
					<img className={Styles.logo__image} src='./images/logo.svg' alt='Логотип Pindie' />
				</Link>
			)}
			<nav className={Styles.menu}>
				<ul className={Styles.menu__list}>
					<li className={Styles.menu__item}>
						<Link
							href='/new'
							className={`${Styles['menu__link']} ${pathname === '/new' ? Styles['menu__link_active'] : ''}`}
						>
							Новинки
						</Link>
					</li>
					<li className={Styles.menu__item}>
						<Link
							href='/popular'
							className={`${Styles['menu__link']} ${pathname === '/popular' ? Styles['menu__link_active'] : ''}`}
						>
							Популярные
						</Link>
					</li>
					<li className={Styles.menu__item}>
						<Link
							href='/shooter'
							className={`${Styles['menu__link']} ${pathname === '/shooter' ? Styles['menu__link_active'] : ''}`}
						>
							Шутеры
						</Link>
					</li>
					<li className={Styles.menu__item}>
						<Link
							href='/runner'
							className={`${Styles['menu__link']} ${pathname === '/runner' ? Styles['menu__link_active'] : ''}`}
						>
							Раннеры
						</Link>
					</li>
					<li className={Styles.menu__item}>
						<Link
							href='/pixel'
							className={`${Styles['menu__link']} ${pathname === '/pixel' ? Styles['menu__link_active'] : ''}`}
						>
							Пиксельные
						</Link>
					</li>
					<li className={Styles.menu__item}>
						<Link
							href='/TDS'
							className={`${Styles['menu__link']} ${pathname === '/TDS' ? Styles['menu__link_active'] : ''}`}
						>
							TDS
						</Link>
					</li>
				</ul>
				<div className={Styles['auth']}>
					<button className={Styles['auth__button']} onClick={isAuthorized === false ? openPopup : logOut}>
						{isAuthorized === true ? 'Выйти' : 'Войти'}
					</button>
				</div>
			</nav>
			<Overlay isOpened={popupIsOpened} closeFunction={closePopup} />
			<Popup isOpened={popupIsOpened} closeFunction={closePopup}>
				<AuthForm close={closePopup} setAuth={setIsAuthorized} closeFunction={closePopup} />
			</Popup>
		</header>
	);
};
