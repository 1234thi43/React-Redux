import { createStore, combineReducers, applyMiddleware } from 'redux';
import { userReducer, productsReducer } from './reducers';
import { thunk } from 'redux-thunk';

const reducer = combineReducers({
	userState: userReducer,
	productsState: productsReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
