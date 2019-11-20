/**
 * I want to create the redux store
 */

import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(reducer, composeWithDevTools(
    applyMiddleware()
));

export default store;