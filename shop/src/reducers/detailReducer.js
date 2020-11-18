import { detailAction } from '../actions';
import { List } from '../data';

const initialData = {
    item: [List[0]]
};

const detailReducer = (state = initialData, action) => {
    switch (action.type) {
        case detailAction.ON_DETAIL: {
            const nextItem = List.filter(item => item.id === action.id);
            return {
                ...state, item: nextItem
            };
        }
        default: {
            return state;
        }
    }
};

export { detailReducer }
