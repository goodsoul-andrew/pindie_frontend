import legacyData from './legacy_data.json';
import { endpoints } from './config';
import { getData } from './utils';

export function getGamesByCategory(categ) {
	return legacyData.filter((item) => {
		return item.category.find((ctg) => {
			return ctg.name === categ;
		});
	});
}

export const getGameById = (id) => {
	return legacyData.find((game) => game.id === Number(id));
};

export const getGameDataById = async (id) => {
	const data = await getData(`${endpoints.games}/${id}`);
	//console.log(data);
	return data;
};

export const getGamesDataByCategory = async (category) => {
	const data = await getData(`${endpoints.games}?categories.name=${category}`);
	//console.log(data);
	return data;
};

export const getAllGamesData = async () => {
	const data = await getData(`${endpoints.games}`);
	return data;
};
