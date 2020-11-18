import { sortAction } from '../actions';
import { List } from '../data';

const initialData = {
    Items: List
}

const sortReducer = (state = initialData, action) => {
    switch (action.type) {
        case sortAction.ON_ORIGIN: {
            return {
                ...state,
                Items: List
            }
        }
        case sortAction.ON_SORT_LOW: {
            const cloneList = Array.from(state.Items);
            const newArray = cloneList.sort(function (a, b) {
                return a.price - b.price
            })
            return {
                ...state,
                Items: newArray
            };
        }
        case sortAction.ON_SORT_HIGH: {
            const cloneList = Array.from(state.Items);
            const newArray = cloneList.sort(function (a, b) {
                return b.price - a.price
            })
            return {
                ...state,
                Items: newArray
            };
        }
        default: {
            return state;
        }
    }
};

export { sortReducer };

