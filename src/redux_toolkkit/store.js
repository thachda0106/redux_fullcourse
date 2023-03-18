import { configureStore } from '@reduxjs/toolkit';
import { reducer as hobbiesReducer } from './slice/hobbiesSlice';
import { reducer as userReducer } from './slice/userSlice';
const store = configureStore({
	reducer: {
		hobbies: hobbiesReducer,
		user: userReducer
	}
});
export default store;
