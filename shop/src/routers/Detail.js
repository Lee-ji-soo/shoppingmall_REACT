import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MainStyle } from '../styled';
import { DetailItem, DetailTab } from '../components';
import { cartAction } from '../actions';

const Detail = () => {
    const selected = useSelector(({ selectReducer }) => selectReducer)
    const item = useSelector(({ detailReducer }) => detailReducer.item[0]);
    const dispatch = useDispatch();

    const isRenderRef = useRef(true);

    const [select, setSelect] = useState({
        id: item.id,
        quantity: 1,
        colors: item.colors,
        sizes: item.sizes,
    })

    useEffect(() => {
        if (isRenderRef.current) {
            isRenderRef.current = false;
            return;
        }
        dispatch(cartAction.onAdd(select));
    }, [select])

    const onAddCart = (data) => {
        const colors = selected.colors.length > 0 ? selected.colors : data.colors;
        const sizes = selected.sizes.length > 0 ? selected.sizes : data.sizes;
        setSelect({
            ...select,
            quantity: selected.quantity,
            colors,
            sizes
        })
    };

    return (
        <MainStyle>
            <DetailItem key={`item${item.id}`} item={item} onAddCart={onAddCart} select={select} />
            <DetailTab />
        </MainStyle>
    )
};
export default Detail;
