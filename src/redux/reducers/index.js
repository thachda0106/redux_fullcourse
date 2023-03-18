import hobbiesReducer from './hobbiesReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
	hobbies: hobbiesReducer,
	user: userReducer
});

export default rootReducer;
