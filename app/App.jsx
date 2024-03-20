'use client';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { useEffect } from 'react';
import { usePindieStore } from './store/app-store';


export const App = (props) => {
	const store = usePindieStore();

	useEffect(() => {
		store.checkAuth();
	}, []);

	return (
		<>
			<Header />
			{props.children}
			<Footer />
		</>
	);
};
