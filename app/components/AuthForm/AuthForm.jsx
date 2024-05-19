'use client';
import { useState, useEffect } from 'react';
import { usePindieStore } from '@/app/store/app-store';
import Styles from './AuthForm.module.css';
import { authorize, register } from '@/app/api/users-utils';
import { isResponseOk } from '@/app/api/utils';
// Есть регистрация!

export const AuthForm = (props) => {
	const [authData, setAuthData] = useState({ email: '', password: '' });
	const [registerData, setRegisterData] = useState({ email: '', password: '', username: '', password_control: '' }); // email это email
	const authContext = usePindieStore();
	//const [userData, setUserData] = useState(null);
	const [message, setMessage] = useState({ status: null, text: null });
	const [actionType, setActionType] = useState('login');
	const titleLabels = { login: 'Авторизация', register: 'Регистрация' };
	const actionLabels = { login: 'Войти', register: 'Зарегистрироваться' };
	const [formTitle, setFormTitle] = useState(titleLabels[actionType]);

	const handleAuthInput = (e) => {
		const newAuthData = authData;
		//console.log("auth", e.target.name, e.target.value);
		newAuthData[e.target.name] = e.target.value;
		setAuthData(newAuthData);
	};

	const handleRegisterInput = (e) => {
		const newRegisterData = registerData;
		//console.log("auth", e.target.name, e.target.value);
		newRegisterData[e.target.name] = e.target.value;
		setAuthData(newRegisterData);
	};

	const handleTitleMouseEnter = (e) => {
		if (actionType === 'login') {
			setFormTitle(titleLabels['register']);
		} else {
			setFormTitle(titleLabels['login']);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (actionType === 'login') {
			const userData = await authorize({ email: authData.email, password: authData.password });
			if (isResponseOk(userData)) {
				authContext.login(userData.user, userData.jwt); // login из контекста
				authContext.checkAuth();
				setMessage({ status: 'success', text: 'Вы авторизовались!' });
			} else {
				setMessage({ status: 'error', text: 'Неверные почта или пароль' });
			}
		} else {
			if (registerData.password === registerData.password_control) {
				const registerResponse = await register({
					email: registerData.email,
					username: registerData.username,
					password: registerData.password
				});
				if (isResponseOk(registerResponse)) {
					const userData = await authorize({ email: authData.email, password: authData.password });
					if (isResponseOk(userData)) {
						authContext.login(userData.user, userData.jwt); // login из контекста
						setMessage({ status: 'success', text: 'Вы зарегистрировались и авторизовались!' });
						setActionType('login');
					} else {
						setMessage({ status: 'error', text: 'Неверные почта или имя пользователя' });
					}
				} else {
					//console.log(registerResponse);
					setMessage({ status: 'error', text: 'Неверные почта или имя пользователя' });
				}
			} else {
				setMessage({ status: 'error', text: 'Пароли не совпадают' });
			}
		}
	};

	const handleActionTypeButton = (e) => {
		e.preventDefault();
		if (actionType === 'login') {
			setActionType('register');
		} else {
			setActionType('login');
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

	useEffect(() => {
		if (!authContext.user) {
			setMessage({ status: null, text: null });
		}
	}, [authContext.user]);

	//console.log(message, authContext.isAuth);
	return (
		<form className={Styles['form']} onSubmit={handleSubmit}>
			<button
				className={Styles['form__title']}
				type='button'
				onClick={handleActionTypeButton}
				onMouseEnter={handleTitleMouseEnter}
				onMouseLeave={() => {
					setFormTitle(titleLabels[actionType]);
				}}
			>
				{formTitle}
			</button>
			<div className={Styles['form__fields']}>
				<label className={Styles['form__field']}>
					<span className={Styles['form__field-title']}>Email</span>
					<input
						className={Styles['form__field-input']}
						type='email'
						name='email'
						placeholder='hello@world.com'
						onInput={(handleAuthInput, handleRegisterInput)}
					/>
				</label>
				{actionType === 'register' ? (
					<label className={Styles['form__field']}>
						<span className={Styles['form__field-title']}>Имя пользователя</span>
						<input
							className={Styles['form__field-input']}
							type='username'
							placeholder='any_username'
							name='username'
							onInput={handleRegisterInput}
						/>
					</label>
				) : null}
				<label className={Styles['form__field']}>
					<span className={Styles['form__field-title']}>Пароль</span>
					<input
						className={Styles['form__field-input']}
						type='password'
						placeholder='***********'
						name='password'
						onInput={(handleAuthInput, handleRegisterInput)}
					/>
				</label>
				{actionType === 'register' ? (
					<label className={Styles['form__field']}>
						<span className={Styles['form__field-title']}>Пароль ещё раз</span>
						<input
							className={Styles['form__field-input']}
							type='password'
							placeholder='***********'
							name='password_control'
							onInput={handleRegisterInput}
						/>
					</label>
				) : null}
			</div>
			{message.status && <p className={Styles[`form__message__${message.status}`]}>{message.text}</p>}
			<div className={Styles['form__actions']}>
				<button className={Styles['form__reset']} type='reset'>
					Очистить
				</button>
				<button className={Styles['form__submit']} type='submit'>
					{actionType === 'login' ? 'Войти' : 'Зарегистрироваться'}
				</button>
			</div>
		</form>
	);
};
