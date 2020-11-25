import React from 'react';
import { nf } from '../utils/const';

const CartItem = ({ onDelete, item, item: { src, brand, name, price } }) => {
    console.log(item)
    return (
        <li>
            <div className="img_wrap">
                <img src={src} />
            </div>
            <div className="detail_wrap">
                <div className='brand'>{brand}</div>
                <div className='name'>{name}</div>
                <div className="price">{nf.format(price)}원</div>
                <form className='cart-form'>
                    <div className='form'>
                        <label htmlFor='size'>사이즈:</label>
                        <select name='size' className="form-control size-form-control select-size">
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                        </select>
                    </div>
                    <div className='form'>
                        <label htmlFor='quantity'>수량:</label>
                        <select data-id="${sample.id}" data-price='${sample.priceset}' className="form-control quantity-form-control select-quantity"
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
            <button className="cart_delte-btn" onClick={onDelete}>
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
