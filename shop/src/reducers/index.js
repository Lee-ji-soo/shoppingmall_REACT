import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { sortReducer } from './sortReducer';
import { detailReducer } from './detailReducer';
import { selectReducer } from './selectReducer';
import { cartReducer } from './cartReducer';

const rootReducer = combineReducers({
    authReducer, sortReducer,
    detailReducer, selectReducer, cartReducer
})

export { rootReducer }
