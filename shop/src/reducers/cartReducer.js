import { cartAction } from '../actions';

const initialData = {
    cartItems: [{
        id: 12,
        price: 158000,
        src: ['https://cdn-images.farfetch-contents.com/16/06/85/70/16068570_30224705_1000.jpg', 'https://cdn-images.farfetch-contents.com/16/06/85/70/16068570_30225835_1000.jpg'],
        name: "트윌 버킷 햇",
        brand: "Officine Generale",
        colors:
            [{ id: 0, name: 'Red', select: true },
            { id: 1, name: 'White', select: false },
            { id: 2, name: 'Black', select: false }],
        sizes:
            [{ id: 0, name: 'Small', select: true },
            { id: 1, name: 'Medium', select: false },
            { id: 2, name: 'Large', select: false }]
    }, {
        id: 13,
        price: 457000,
        src: ['https://cdn-images.farfetch-contents.com/16/06/05/90/16060590_30255326_1000.jpg', 'https://cdn-images.farfetch-contents.com/16/06/05/90/16060590_30255327_1000.jpg'],
        name: "스트라이프 브러시드 니트 스웨터",
        brand: "Paura",
        colors:
            [{ id: 0, name: 'Red', select: true },
            { id: 1, name: 'White', select: false },
            { id: 2, name: 'Black', select: false }],
        sizes:
            [{ id: 0, name: 'Small', select: true },
            { id: 1, name: 'Medium', select: false },
            { id: 2, name: 'Large', select: false }]
    }]
};

const cartReducer = (state = initialData, action) => {
    switch (action.type) {
        case cartAction.ON_ADD: {
            const nextData = state.cartItems.concat(action.item);
            return {
                ...state, cartItems: nextData
            }
        }
        case cartAction.ON_DELETE: {
            const nextData = state.cartItems.filter(item => item.id !== action.id);
            return {
                ...state, cartItems: nextData
            }
        }
        default: return state;
    };

};

export { cartReducer };
