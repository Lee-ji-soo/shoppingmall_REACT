const ON_ORIGIN = 'ON_ORIGIN';
const ON_SORT_LOW = 'ON_SORT_LOW';
const ON_SORT_HIGH = 'ON_SORT_HIGH';

const onOrigin = () => ({ type: ON_ORIGIN });
const onSortLow = () => ({ type: ON_SORT_LOW });
const onSortHigh = () => ({ type: ON_SORT_HIGH });

const sortAction = {
    ON_ORIGIN,
    ON_SORT_LOW,
    ON_SORT_HIGH,
    onOrigin,
    onSortLow,
    onSortHigh,
}

export { sortAction };
