import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectAction } from '../actions';
import { ConfirmWindow } from '../styled';

const DetailSelector = ({ onAddCart, select }) => {
    const dispatch = useDispatch();
    const [isConfirming, setIsConfirming] = useState(false);

    const [data, setData] = useState({
        quantity: select.quantity,
        colors: select.colors,
        sizes: select.sizes
    });

    const handleSubmit = (e) => {
        onAddCart(data);
        e.preventDefault();
        setIsConfirming(false);
    };

    const handleClickAddButton = (e) => {
        e.preventDefault();
        setIsConfirming(true);
    };

    const handleQuantity = e => {
        const { target: { value: value } } = e;
        setData({ ...select, quantity: Number(value) });
        dispatch(selectAction.onQuantity(value));
    };

    const handleColor = e => {
        const { target: { value } } = e;
        dispatch(selectAction.onColor(data.colors, value))
    };

    const handleSize = e => {
        const { target: { value } } = e;
        dispatch(selectAction.onSize(data.sizes, value))
    };

    const confirmAdd = (e) => {
        handleSubmit(e);
    };

    const confirmNo = () => {
        setIsConfirming(false);
    }

    const askConfirm = (e) => {
        const { target, target: { dataset: { confirm } } } = e;
        const currentTarget = target.closest('.confirmWindow').id;
        if (currentTarget === 'addOrNot' && confirm === 'go') {
            confirmAdd(e)
        } else if (confirm === 'no') {
            confirmNo()
        }
    };

    return (
        <div className='select_wrap'>
            <form className='form_wrap'>
                <div className="line">
                    <label htmlFor='quantity'>수량</label>
                    <input type="number"
                        value={data.quantity} className='select' name='quantity' min='1' max="5" step='1' onChange={handleQuantity} />
                </div>
                <div className="line">
                    <label htmlFor='color'>색상</label>
                    <select className='select' name='color' onChange={handleColor}>
                        {
                            data.colors.map(color =>
                                <option key={`color${color.id}`}>{color.name}</option>)
                        }
                    </select>
                </div>
                <div className="line">
                    <label htmlFor='size'>사이즈</label>
                    <select className='select' name='size' onChange={handleSize}>
                        {
                            data.sizes.map(size =>
                                <option key={`size${size.id}`}>{size.name}</option>)
                        }
                    </select>
                </div>
                <ConfirmWindow id="addOrNot" className={`confirmWindow ${isConfirming ? 'visible' : ''}`}>
                    <p className="txt">상품을 장바구니에 추가하시겠습니까?</p>
                    <div className='confirm_btn'>
                        <button data-confirm='go' onClick={(e) => { askConfirm(e) }}
                        >변경</button>
                        <button data-confirm='no'
                            onClick={askConfirm}>취소</button>
                    </div>
                </ConfirmWindow>
                <button className="btn" type="submit" onClick={handleClickAddButton}>장바구니추가</button>
            </form>
        </div>
    )
};

export default DetailSelector;
