import React from 'react';
import { ButtonStyle } from '../styled';

const MoreButton = ({ onLoadMore }) => {
    return (
        <ButtonStyle>
            <button className="btn" onClick={onLoadMore}>상품 더보기</button>
        </ButtonStyle>
    )
};

export default MoreButton;
