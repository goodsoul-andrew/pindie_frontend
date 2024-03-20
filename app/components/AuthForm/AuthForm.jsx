'use client';
import { useState, useEffect } from 'react';
import { usePindieStore } from '@/app/store/app-store';
import Styles from './AuthForm.module.css';
import { authorize } from '@/app/api/users-utils';
import { isResponseOk } from '@/app/api/utils';

export const AuthForm = (props) => {
	const [authData, setAuthData] = useState({ identifier: '', password: '' });
	const authContext = usePindieStore();
	//const [userData, setUserData] = useState(null);
	const [message, setMessage] = useState({ status: null, text: null });
	const handleInput = (e) => {
		const newAuthData = authData;
		//console.log("auth", e.target.name, e.target.value);
		newAuthData[e.target.name] = e.target.value;
		setAuthData(newAuthData);
	};
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		const userData = await authorize(authData);
		if (isResponseOk(userData)) {
			authContext.login(userData.user, userData.jwt); // login из контекста
			setMessage({ status: 'success', text: 'Вы авторизовались!' });
		} else {
			setMessage({ status: 'error', text: 'Неверные почта или пароль' });
		}
	}; 

	useEffect(() => {
		let timer;
		if (authContext.user) {
			timer = setTimeout(() => {
				props.closeFunction();
			}, 1000);
		}
		return () => clearTimeout(timer);
	}, [authContext.user]);
	return (
		<form className={Styles['form']} onSubmit={handleSubmit}>
			<h2 className={Styles['form__title']}>Авторизация</h2>
			<div className={Styles['form__fields']}>
				<label className={Styles['form__field']}>
					<span className={Styles['form__field-title']}>Email</span>
					<input
						className={Styles['form__field-input']}
						type='email'
						name='identifier'
						placeholder='hello@world.com'
						onInput={handleInput}
					/>
				</label>
				<label className={Styles['form__field']}>
					<span className={Styles['form__field-title']}>Пароль</span>
					<input
						className={Styles['form__field-input']}
						type='password'
						placeholder='***********'
						name='password'
						onInput={handleInput}
					/>
				</label>
			</div>
			{message.status && <p className={Styles[`form__message__${message.status}`]}>{message.text}</p>}
			<div className={Styles['form__actions']}>
				<button className={Styles['form__reset']} type='reset'>
					Очистить
				</button>
				<button className={Styles['form__submit']} type='submit'>
					Войти
				</button>
			</div>
		</form>
	);
};
