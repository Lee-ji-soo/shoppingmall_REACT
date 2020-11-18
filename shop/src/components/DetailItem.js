import React from 'react';
import { nf } from '../utils/const';
import { DetailInfo } from '../styled';

const DetailItem = ({ item: { id, brand, src, name, price, } }) => {
    return (
        <DetailInfo>
            <div className='img_wrap'>
                <img src={src[0]} />
                <div>
                    <button className="btn prev">x</button>
                    <button className="btn next">b</button>
                </div>
            </div>
            <div className='info_wrap'>
                <p className='txt brand'>{brand}</p>
                <h4 className='txt name'>{name}</h4>
                <p className='txt price'>₩{nf.format(price)}원</p>
            </div>
        </DetailInfo>
    )
};

export default DetailItem;
