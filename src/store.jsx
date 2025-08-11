import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { userReducer, productsReducer } from './reducers';
import { thunk } from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
	userState: userReducer,
	productsState: productsReducer,
});

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
