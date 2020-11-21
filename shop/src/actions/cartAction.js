const ON_ADD = 'ON_ADD';
const onAdd = (item) => ({ type: ON_ADD, item });

const cartAction = {
    ON_ADD,
    onAdd
};

export { cartAction };

