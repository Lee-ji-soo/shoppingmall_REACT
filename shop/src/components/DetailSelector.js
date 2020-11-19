import React from 'react';

const DetailSelector = () => {
    return (
        <div className='select_wrap'>
            <form className='form_wrap'>
                <div className="line">
                    <label htmlFor='quantity'>수량</label>
                    <input type="number" className='select' name='quantity' min='1' max="5" step='1' />
                </div>
                <div className="line">
                    <label htmlFor='color'>색상</label>
                    <select className='select' name='color'>
                        <option>White</option>
                        <option>Red</option>
                        <option>Green</option>
                    </select>
                </div>
                <div className="line">
                    <label htmlFor='size'>사이즈</label>
                    <select className='select' name='size'>
                        <option>Large</option>
                        <option>Medium</option>
                        <option>Small</option>
                    </select>
                </div>
                <button className="btn" type="submit">장바구니추가</button>
            </form>
        </div>
    )
};

export default DetailSelector;
