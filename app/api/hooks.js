'use client';
import { getGameById, getGamesByCategory, getAllGames, getGameByTitle } from './data-utils';
import { useState, useEffect } from 'react';
import { isDataOk } from './utils';

export const useGetGamesByCategory = (category, triggers) => {
	const [games, setGames] = useState(null);
	useEffect(() => {
		async function fetchData() {
			const data = await getGamesByCategory(category);
			//console.log('response', data);
			setGames(data);
		}
		fetchData();
	}, [...triggers]);
	return games;
};

export const useGetAllGames = (triggers) => {
	const [games, setGames] = useState(null);
	useEffect(() => {
		async function fetchData() {
			const data = await getAllGames();
			//console.log('response', data);
			setGames(data);
		}
		fetchData();
	}, [...triggers]);
	return games;
};

export const useGetGameById = (id, triggers) => {
	const [game, setGame] = useState(null);
	useEffect(() => {
		async function fetchData() {
			const data = await getGameById(id);
			setGame(data);
		}
		fetchData();
	}, [...triggers]);
	return game;
};

export const useGetGameByTitle = (title, triggers) => {
	const [game, setGame] = useState(null);
	useEffect(() => {
		async function fetchData() {
			const data = await getGameByTitle(title);
			setGame(data);
		}
		fetchData();
	}, [...triggers]);
	return game;
};
