import { endpoints } from './config';
import { getData } from './utils';
import { isDataOk } from './utils';

export const normalizeGame = (game) => {
	game['users'] = game.users_permissions_users;
	return game;
};

export const getGameById = async (id) => {
	let data = await getData(`${endpoints.games}/${id}`);
	//console.log(data);
	return data;
};

export const getGamesByCategory = async (category) => {
	let data = await getData(`${endpoints.games}?categories.name=${category}`);
	//console.log("sdfhlksehfisuhflishf")
	//data = data.map(normalizeGame);
	//console.log("data",data);
	return data;
};

export const getAllGames = async () => {
	let data = await getData(`${endpoints.games}`);
	return data;
};

export const getGamesByUser = async () => {
	let data = await getData(`${endpoints.games}`);
	let games = null;
	if (isDataOk(data)) {
		games = data.filter((game) => {
			return game.users.find((u) => {
				return u.email === user.email;
			});
		});
	}
	return games;
};
