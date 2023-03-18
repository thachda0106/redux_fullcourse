import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { addHobby } from '../redux/actions';
import hobbiesSlice from '../redux_toolkkit/slice/hobbiesSlice';
const Home = () => {
	// get store từ redux
	const stateStore = useSelector((state) => state);
	// get dispath để dispath actions
	const dispatch = useDispatch();
	//  actions từ sliceHobbies từ redux_toolkkit
	const { actions } = hobbiesSlice;
	console.log(hobbiesSlice);
	return (
		<div>
			<h1>Home</h1>
			<button
				onClick={() => {
					const action = actions.addHobby('play game');
					dispatch(action);
				}}
			>
				{' '}
				click me!{' '}
			</button>
		</div>
	);
};

export default Home;
