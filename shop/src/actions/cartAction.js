const ON_ADD = 'ON_ADD';
const ON_DELETE = 'ON_DELETE';
const ON_CHANGE_QUANTITY = 'ON_CHANGE_QUANTITY';

const onAdd = (item) => ({ type: ON_ADD, item });
const onDelete = (id) => ({ type: ON_DELETE, id });
const onChangeQuantity = (props) => ({ type: ON_CHANGE_QUANTITY, props })

const cartAction = {
    ON_ADD,
    ON_DELETE,
    ON_CHANGE_QUANTITY,
    onAdd,
    onDelete,
    onChangeQuantity,
};

export { cartAction };

