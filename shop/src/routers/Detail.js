import React from 'react';
import { useSelector } from 'react-redux';
import { MainStyle } from '../styled';
import { DetailItem } from '../components';

const Detail = () => {
    const item = useSelector(({ detailReducer }) => detailReducer.item);

    return (
        <MainStyle>
            { item.map(pd =>
                <DetailItem key={`item${pd.id}`} item={pd} />
            )}
        </MainStyle>
    )
};

export default Detail;
