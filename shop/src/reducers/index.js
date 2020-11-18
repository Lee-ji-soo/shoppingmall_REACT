import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { sortReducer } from './sortReducer';

const rootReducer = combineReducers({
    authReducer, sortReducer
})

export { rootReducer }
