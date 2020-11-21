const ON_QUANTITY = 'ON_QUANTITY';
const ON_COLOR = 'ON_COLOR';
const ON_SIZE = 'ON_SIZE';

const onQuantity = (value) => ({ type: ON_QUANTITY, value });
const onColor = (colors, value) => ({ type: ON_COLOR, colors, value });
const onSize = (sizes, value) => ({ type: ON_SIZE, sizes, value });

const selectAction = {
    ON_QUANTITY,
    ON_COLOR,
    ON_SIZE,
    onQuantity,
    onColor,
    onSize
}

export { selectAction };
