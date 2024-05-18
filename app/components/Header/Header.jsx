'use client';
import { useEffect, useState } from 'react';
import Styles from './Header.module.css';
import { Overlay } from '../Overlay/Overlay';
import { Popup } from '../Popup/Popup';
import { AuthForm } from '../AuthForm/AuthForm';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { usePindieStore } from '@/app/store/app-store';
import { Redirect } from 'next';

export const Header = () => {
	const pathname = usePathname();
	//console.log(pathname, pathname === "/me");
	const [popupIsOpened, setPopupIsOpened] = useState(false);
	const authContext = usePindieStore();
	const openPopup = () => {
		setPopupIsOpened(true);
	};
	const closePopup = () => {
		setPopupIsOpened(false);
		//console.log("close");
	};

	const handleLogout = () => {
		authContext.logout(); // Метод logout из контекста
	};

	let loginButton = (
		<button className={Styles['auth__button']} onClick={openPopup}>
			Войти
		</button>
	);
	if (authContext.isAuth && pathname !== '/me') {
		loginButton = (
			<Link className={Styles['auth__button']} href='/me'>
				Профиль
			</Link>
		);
	} else if (authContext.isAuth && pathname === '/me') {
		loginButton = (
			<Link href='/' className={Styles['auth__button']} onClick={handleLogout}>
				Выйти
			</Link>
		);
	}

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
				<div className={Styles['auth']}>{loginButton}</div>
			</nav>
			<Overlay isOpened={popupIsOpened} closeFunction={closePopup} />
			<Popup isOpened={popupIsOpened} closeFunction={closePopup}>
				<AuthForm close={closePopup} closeFunction={closePopup} />
			</Popup>
		</header>
	);
};
