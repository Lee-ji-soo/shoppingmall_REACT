import React, { useEffect, useState } from 'react';
import { MainStyle, CartStyle, SumStyle, CartItemStyle } from '../styled';
import { useSelector, useDispatch } from 'react-redux';
import { CartItem } from '../components';
import { nf } from '../utils/const';

const Cart = () => {
    const dispatch = useDispatch();
    const [confirmDelete, setConfirmDelete] = useState(false);
    const Items = useSelector(({ cartReducer }) => cartReducer.cartItems);

    const price = Items.reduce((acc, cur) => {
        return acc + cur.price;
    }, 0);

    const handleDelete = (e) => {
        const { currentTarget } = e;
        const $currentLI = currentTarget.closest(`li`);
        const $confirmNode = $currentLI.querySelector('#deleteOrNot');
        setConfirmDelete(true);
        if (setConfirmDelete) {
            $confirmNode.style.visibility = 'visible';
            $confirmNode.style.opacity = '1';
        }
    }

    useEffect(() => {
    }, [])

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
                                    key={`cartItem${item.id}`} handleDelete={handleDelete}
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
