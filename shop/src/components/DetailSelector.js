import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAction } from '../actions';

const DetailSelector = ({ onAddCart, select }) => {
    const dispatch = useDispatch();

    const [data, setData] = useState({
        quantity: select.quantity,
        colors: select.colors,
        sizes: select.sizes
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddCart(data);
    }

    const handleQuantity = e => {
        const { target: { value: value } } = e;
        setData({ ...select, quantity: Number(value) });
        dispatch(selectAction.onQuantity(value));
    }

    const handleColor = e => {
        const { target: { value } } = e;
        dispatch(selectAction.onColor(data.colors, value))
    }

    const handleSize = e => {
        const { target: { value } } = e;
        dispatch(selectAction.onSize(data.sizes, value))
    }

    return (
        <div className='select_wrap'>
            <form className='form_wrap' onSubmit={handleSubmit}>
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
                <button className="btn" type="submit">장바구니추가</button>
            </form>
        </div>
    )
};

export default DetailSelector;
