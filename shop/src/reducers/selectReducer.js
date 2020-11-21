import { selectAction } from '../actions';

const initialData = {
    quantity: 1,
    colors: [],
    sizes: []
}

const selectReducer = (state = initialData, action) => {
    switch (action.type) {
        case selectAction.ON_QUANTITY: {
            const nextData = Number(action.value);
            return { ...state, quantity: nextData };
        };
        case selectAction.ON_COLOR: {
            const nextData = action.colors.map(color =>
                color.name === action.value
                    ? ({ ...color, select: !color.select })
                    : ({ ...color, select: false })
            )
            return { ...state, colors: nextData };
        };
        case selectAction.ON_SIZE: {
            const nextData = action.sizes.map(size =>
                size.name === action.value
                    ? ({ ...size, select: !size.select })
                    : ({ ...size, select: false })
            )
            return { ...state, sizes: nextData }
        }
        default: return state;
    }
}

export { selectReducer };
