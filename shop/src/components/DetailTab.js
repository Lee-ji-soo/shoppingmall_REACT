import React, { useState } from 'react';
import { TabStyle } from '../styled';

const DetailTab = () => {
    const [tab, setTab] = useState('product');

    const handleTab = (e) => {
        const { target: { dataset: { tab } } } = e;
        if (tab === 'product') {
            setTab('product');
        } else if (tab === 'info') {
            setTab('info');
        } else if (tab === 'shipping') {
            setTab('shipping');
        } else {
            return;
        }
    };

    return (
        <TabStyle>
            <div className='tab_wrap'>
                <ul onClick={handleTab}>
                    <li className={`tab_btn ${tab === 'product' ? 'orange' : ''}`} data-tab="product">Products</li>
                    <li className={`tab_btn ${tab === 'info' ? 'orange' : ''}`} data-tab="info">Info</li>
                    <li className={`tab_btn ${tab === 'shipping' ? 'orange' : ''}`} data-tab="shipping">Shipping</li>
                </ul>
            </div>
            <div className='con_wrap'>
                <div className={`tab_content ${tab === 'product' ? 'show' : ''}`} >
                    <p>상품설명입니다. Product</p>
                </div>
                <div className={`tab_content ${tab === 'info' ? 'show' : ''}`} >
                    <p>상품정보입니다. Information</p>
                </div>
                <div className={`tab_content ${tab === 'shipping' ? 'show' : ''}`} >
                    <p>배송정보입니다. Shipping</p>
                </div>
            </div>
        </TabStyle>
    )
};

export default DetailTab;
