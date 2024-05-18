export const BASE_URL = 'http://localhost:3105';

export const endpoints = {
	games: `${BASE_URL}/api/games`,
	auth: `${BASE_URL}/api/auth/login`,
	user: `${BASE_URL}/api/me`,
	register: `${BASE_URL}/api/users`,
	vote: `${BASE_URL}/api/games/vote`
};
