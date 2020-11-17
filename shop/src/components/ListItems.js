import React, { useState } from 'react';
import { Item } from '../styled/mainItem';
import { nf } from '../utils/const';

const ListItems = ({ item: { id, brand, src, name, price, } }) => {
    const [hover, setHover] = useState(false)

    const handleMouseOver = () => {
        setHover(true)
    }

    const handleMouseLeave = () => {
        setHover(false)
    }

    return (
        <Item onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} >
            <img className='img' src={src[0]} />
            <div className={`info ${hover ? 'displayBlock' : ''}`} >
                <p className='brand'>{brand}</p>
                <p className='name'>{name}</p>
                <p className='price'>₩{nf.format(price)}원</p>
            </div>
        </Item>
    )
};

export default ListItems;
