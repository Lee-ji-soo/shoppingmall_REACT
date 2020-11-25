import React from 'react';
import { nf } from '../utils/const';

const CartItem = ({ onDelete, item: { id, src, brand, name, price } }) => {
    return (
        <li>
            <div className="img_wrap">
                <img src={src} />
            </div>
            <div className="detail_wrap">
                <p className='brand'>{brand}</p>
                <p className='name'>{name}</p>
                <p className="price">{nf.format(price)}원</p>
                <form className='cart-form'>
                    <div className='form'>
                        <label htmlFor='size'>사이즈:</label>
                        <select name='size'>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                        </select>
                    </div>
                    <div className='form'>
                        <label htmlFor='quantity'>수량:</label>
                        <select data-id="${sample.id}" data-price='${sample.priceset}'
                            name='quantity'>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                        </select>
                    </div>
                </form>
            </div>
            <button className="cart_delte-btn" onClick={() => { onDelete(id) }}>
                <div>
                    <i className="cart_delete-icon">X</i>
                </div>
            </button>
            <div id="changeOrNot" className="changeOrNot">
                <p className="txt">수량을 변경하시겠습니까?</p>
                <div className='confirm_btn'>
                    <button className="confirm-go">변경</button>
                    <button className="confirm-no">취소</button>
                </div>
            </div>
        </li>
    )
};

export default CartItem;
