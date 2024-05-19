import { create } from 'zustand';
import { setJWT, getJWT, removeJWT, getMe } from '../api/users-utils';

export const usePindieStore = create((set) => ({
	isAuth: false,
	user: null,
	token: null,
	login: (user, token) => {
		set({ isAuth: true, user, token });
		setJWT(token);
	},
	logout: () => {
		set({ isAuth: false, user: null, token: null });
		removeJWT();
	},
	checkAuth: async () => {
		const jwt = getJWT();
		//console.log("jwt", jwt);
		if (jwt) {
			const user = await getMe(jwt);
			if (user) {
				//console.log("user", user);
				set({ isAuth: true, user, token: jwt });
				setJWT(jwt);
			} else {
				set({ isAuth: false, user: null, token: null });
				removeJWT();
			}
		} else {
			set({ isAuth: false, user: null, token: null });
		}
	}
}));
