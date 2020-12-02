import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { sortReducer } from './sortReducer';
import { detailReducer } from './detailReducer';
import { selectReducer } from './selectReducer';
import { cartReducer } from './cartReducer';
import { mypageReducer } from './mypageReducer';

const rootReducer = combineReducers({
    authReducer, sortReducer,
    detailReducer, selectReducer, cartReducer, mypageReducer
})

export { rootReducer }
