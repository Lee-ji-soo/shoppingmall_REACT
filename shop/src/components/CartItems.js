import React from 'react';
import { CartItemStyle } from '../styled/mainItem';
import { nf } from '../utils/const';

const CartItems = ({ item: { src, brand, name, price } }) => {
    return (
        <CartItemStyle>
            <img className='img' src={src[0]} />
            <div className='info' >
                <p className='brand'>{brand}</p>
                <p className='name'>{name}</p>
                <p className='price'>₩{nf.format(price)}원</p>
            </div>
        </CartItemStyle>
    )
};

export default CartItems;
