const ON_ADD = 'ON_ADD';
const ON_DELETE = 'ON_DELETE';

const onAdd = (item) => ({ type: ON_ADD, item });
const onDelete = (id) => ({ type: ON_DELETE, id });

const cartAction = {
    ON_ADD,
    ON_DELETE,
    onAdd,
    onDelete
};

export { cartAction };

