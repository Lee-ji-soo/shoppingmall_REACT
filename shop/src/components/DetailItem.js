import React, { useEffect, useState, useRef } from 'react';
import { nf } from '../utils/const';
import { DetailInfoStyle } from '../styled';
import { DetailSelector } from '../components';

const DetailItem = ({ onAddCart, select, item: { brand, src, name, price, } }) => {

    const [imgNum, setImgNum] = useState(0);
    const imgRef = useRef();

    const handleButton = (e) => {
        const { target } = e;
        if (target.dataset.to === 'prev') {
            setImgNum(imgNum - 1);
        } else if (target.dataset.to === 'next') {
            setImgNum(imgNum + 1);
        }
        if (imgNum <= 0) {
            setImgNum(src.length - 1);
        } else if (imgNum >= src.length - 1) {
            setImgNum(0);
        }
    };

    useEffect(() => {
        imgRef.current.style.transition = "all .5s ease-in-out";
        imgRef.current.style.transform = `translateX(-${imgNum}00%)`;
    }, [imgNum])

    return (
        <DetailInfoStyle>
            <div className='img_BOX'>
                <div className='imgs_wrap'>
                    <div ref={imgRef} className='imgs'>
                        <img src={src[0]} />
                        <img src={src[1]} />
                    </div>
                </div>
                <div onClick={handleButton} className='btn_wrap'>
                    <button data-to='prev' className="btn">〈</button>
                    <button data-to='next' className="btn">〉</button>
                </div>
            </div>
            <div className='info_BOX'>
                <div className='info_wrap'>
                    <p className='txt brand'>{brand}</p>
                    <h4 className='txt name'>{name}</h4>
                    <p className='txt price'>₩{nf.format(price)}원</p>
                </div>
                <DetailSelector onAddCart={onAddCart} select={select} />
            </div>
        </DetailInfoStyle>
    )
};

export default DetailItem;
