import { createSlice } from '@reduxjs/toolkit';
const userSlice = createSlice({
	name: 'user',
	initialState: [],
	reducers: {
		setUser: (state, action) => {
			console.log({ state, action });
		}
	}
});
export const { actions, reducer } = userSlice;
export default userSlice;
