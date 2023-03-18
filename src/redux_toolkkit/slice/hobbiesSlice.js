import { createSlice } from '@reduxjs/toolkit';
const hobbiesSlice = createSlice({
	name: 'hobbies',
	initialState: [ 'Listen to music', 'reading book' ],
	reducers: {
		addHobby(state, action) {
			state.push(action.payload);
		}
	}
});
export const { actions, reducer } = hobbiesSlice;
export default hobbiesSlice;
