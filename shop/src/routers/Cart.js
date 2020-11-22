import React from 'react';
import { MainStyle, ListStyle } from '../styled';
import { useSelector } from 'react-redux';
import { CartItems } from '../components';

const Cart = () => {
    const Items = useSelector(({ cartReducer }) => cartReducer.cartItems);
    return (
        <MainStyle>
            <ListStyle>
                {
                    Items.map(item =>
                        <CartItems key={`cartItems${item.id}`} item={item} />
                    )
                }
            </ListStyle>
        </MainStyle>
    )
};

export default Cart;
