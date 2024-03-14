export const isResponseOk = (response) => {
	return !(response instanceof Error);
};

export const getData = async (url) => {
	try {
		const response = await fetch(url);
		if (response.status !== 200) {
			throw new Error('Ошибка получения данных');
		}
		const data = await response.json();
		return data;
	} catch (error) {
		//console.log(error);
		return error;
	}
};
