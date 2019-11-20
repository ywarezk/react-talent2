

import { combineReducers } from 'redux';
import messageReducer from './message';
import settingsReducer from './settings';

const parentReducer = combineReducers({
    messaging: messageReducer,
    settings: settingsReducer
});

export default parentReducer;