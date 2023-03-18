import { createStore } from 'redux';
import rootReducer from './reducers';
// khai báo enhancers để làm việc với redux devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension';
const composedEnhancers = composeWithDevTools();
// đối số thứ 2 của createStore(rootReducer, initialState, enhancers )
const store = createStore(rootReducer,undefined, composedEnhancers);
export default store;
