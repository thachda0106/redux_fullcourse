const initialState = [ 'Listen to music', 'reading book' ];
const hobbiesReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_HOBBY':
			return [ ...state, action.payload ];
		default:
			return state;
	}
};

export default hobbiesReducer;
