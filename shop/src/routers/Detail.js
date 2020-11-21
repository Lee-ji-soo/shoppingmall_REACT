import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MainStyle } from '../styled';
import { DetailItem, DetailTab } from '../components';

const Detail = () => {
    const item = useSelector(({ detailReducer }) => detailReducer.item[0]);
    const dispatch = useDispatch();

    const [select, setSelect] = useState({
        id: item.id,
        quantity: 1,
        colors: item.colors,
        sizes: item.sizes,
    })

    const onAddCart = (select) => {
        // dispatch
        console.log(select);
    };

    return (
        <MainStyle>
            <DetailItem key={`item${item.id}`} item={item} onAddCart={onAddCart} select={select} />
            <DetailTab />
        </MainStyle>
    )
};
export default Detail;
