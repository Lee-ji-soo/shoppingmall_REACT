import React from 'react';
import { MainStyle, CartStyle, SumStyle, CartItemStyle } from '../styled';
import { useSelector } from 'react-redux';
import { CartItem } from '../components';
import { nf } from '../utils/const';

const Cart = () => {
    const Items = useSelector(({ cartReducer }) => cartReducer.cartItems);

    const price = Items.reduce((acc, cur) => {
        return acc + cur.price;
    }, 0);

    return (
        <MainStyle>
            <CartStyle>
                <div className='cartpage_wrap'>
                    <CartItemStyle className='cartItems_wrap'>
                        <h4>MY CART</h4>
                        {
                            Items.map((item, i) =>
                                <CartItem
                                    id={`cartItem${item.id}`}
                                    key={`cartItem${item.id}`}
                                    item={item} />
                            )
                        }
                    </CartItemStyle>
                    <SumStyle className='sum_wrap'>
                        <h4>TOTAL</h4>
                        <p>
                            <span className='tt'>총합</span>
                            <span className='con'>{nf.format(price)}원</span>
                        </p>
                        <p>
                            <span className='tt'>배송</span>
                            <span className='con'>ℹ︎</span>
                        </p>
                    </SumStyle>
                </div>
            </CartStyle>
        </MainStyle>
    )
};

export default Cart;
