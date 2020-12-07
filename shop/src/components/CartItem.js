import React, { useEffect, useState } from 'react';
import { nf } from '../utils/const';
import { ConfirmWindow } from '../styled';

const CartItem = ({ changeQuantity, deleteItem, item: { id, src, brand, name, price } }) => {
    const [isDelete, setIsDelete] = useState(false);
    const [isChange, setIsChange] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [preQuantity, setPreQuantity] = useState(1);

    const handleDeleteButton = () => {
        setIsDelete(true);
    };

    const handleQuantityForm = (e) => {
        const { target: { value } } = e;
        setPreQuantity(value);
        setIsChange(true);
    };

    const confirmDelete = id => {
        deleteItem(id);
    };

    const confirmChange = (id) => {
        changeQuantity(preQuantity, id);
        setQuantity(preQuantity);
        setIsChange(false);
    }

    const confirmNo = () => {
        setIsDelete(false);
        setIsChange(false);
    };

    const askConfirm = (e, id) => {
        const { target, target: { dataset: { confirm } } } = e;
        const currentTarget = target.closest('.confirmWindow').id;
        if (currentTarget === 'deleteOrNot' && confirm === 'go') {
            confirmDelete(id)
        } else if (currentTarget === 'changeOrNot' && confirm === 'go') {
            confirmChange(id);
        } else if (confirm === 'no') {
            confirmNo()
        }
    };

    useEffect(() => {
    }, [])

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
                    <div>
                        <label htmlFor='size'>사이즈:</label>
                        <select name='size'>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='quantity'>수량:</label>
                        <select name='quantity' onChange={handleQuantityForm} value={quantity}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </form>
            </div>
            <button data-item={`cartItem${id}`} className="cart_delte-btn"
                onClick={handleDeleteButton}>X</button>
            <ConfirmWindow id="deleteOrNot" className={`confirmWindow ${isDelete ? 'visible' : ''}`}>
                <p className="txt">상품을 삭제하시겠습니까?</p>
                <div className='confirm_btn'>
                    <button data-confirm='go'
                        onClick={(e) => { askConfirm(e, id) }}>삭제</button>
                    <button data-confirm='no'
                        onClick={askConfirm}>취소</button>
                </div>
            </ConfirmWindow>
            <ConfirmWindow id="changeOrNot" className={`confirmWindow ${isChange ? 'visible' : ''}`}>
                <p className="txt">수량을 변경하시겠습니까?</p>
                <div className='confirm_btn'>
                    <button data-confirm='go' onClick={(e) => { askConfirm(e, id) }}
                    >변경</button>
                    <button data-confirm='no'
                        onClick={askConfirm}>취소</button>
                </div>
            </ConfirmWindow>
        </li>
    )
};

export default CartItem;
