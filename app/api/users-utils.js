import { endpoints } from './config';

export const authorize = async (data) => {
	//console.log(data);
	try {
		const response = await fetch(endpoints.auth, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		});
		if (response.status !== 200) {
			throw new Error(`Ошибка авторизации ${response.status}: ${response.statusText}`);
		}
		const result = await response.json();
		return result;
	} catch (error) {
		//console.log(error);
		//return null;
		return error;
	}
};

export const getMe = async (jwt) => {
	try {
		//console.log("getMe")
		const response = await fetch(endpoints.user, {
			method: 'GET',
			headers: { Authorization: `Bearer ${jwt}` }
		});
		if (response.status !== 200) {
			throw new Error('Ошибка получения данных');
		}
		const result = await response.json();
		return result;
	} catch (error) {
		return error;
	}
};

export const setJWT = (jwt) => {
	localStorage.setItem('jwt', jwt);
};

export const getJWT = () => {
	return localStorage.getItem('jwt');
};

export const removeJWT = () => {
	localStorage.removeItem('jwt');
};

export const checkIfUserVoted = (game, userId) => {
	console.log("AAA", game, userId)
	return game.users.find((user) => {return user._id === userId});
};

export const vote = async (gameId, jwt, usersArray) => {
	try {
		const response = await fetch(`${endpoints.vote}/${gameId}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				"Authorization": `Bearer ${jwt}`,
			},
			body: JSON.stringify({ users: usersArray })
		});
		if (response.status !== 200) {
			//console.log(response)
			throw new Error('Ошибка голосования');
		}
		const result = await response.json();
		return result;
	} catch (error) {
		return error;
	}
};

export const register = async (data) => {
	try {
		//console.log(data);
		const response = await fetch(endpoints.register, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		});
		if (response.status !== 200) {
			//console.log(response);
			throw new Error(`Ошибка регистрации ${response.status}: ${response.statusText}`);
		}
		const result = await response.json();
		return result;
	} catch (error) {
		//console.log(error);
		//return null;
		return error;
	}
};
