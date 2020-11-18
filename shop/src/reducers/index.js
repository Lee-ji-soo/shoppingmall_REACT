import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { sortReducer } from './sortReducer';
import { detailReducer } from './detailReducer';

const rootReducer = combineReducers({
    authReducer, sortReducer, detailReducer
})

export { rootReducer }
