import { cartAction } from '../actions';

const initialData = {
    cart: []
};

const cartReducer = (state = initialData, action) => {
    switch (action.type) {
        case cartAction.ON_ADD: {
            const nextData = state.cart.concat(action.item);
            console.log('cartReducer', nextData);
            return {
                ...state, cart: nextData
            }
        }
        default: return state;
    };

};

export { cartReducer };
