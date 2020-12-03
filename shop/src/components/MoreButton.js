import React from 'react';
import { ButtonStyle, MarginStyle } from '../styled';

const MoreButton = ({ onLoadMore }) => {
    return (
        <MarginStyle>
            <ButtonStyle className="btn" onClick={onLoadMore}>상품 더보기</ButtonStyle>
        </MarginStyle>
    )
};

export default MoreButton;
