export const addHobby = (hobby) => {
	return {
		type: 'ADD_HOBBY',
		payload: hobby
	};
};

export const deleteHobby = (hobby) => {
	return {
		type: 'DELETE_HOBBY',
		payload: hobby
	};
};
