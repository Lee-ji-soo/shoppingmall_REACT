import React from 'react';
import { ButtonStyle, MarginStyle } from '../styled';

const SortButton = ({ state, onSortLow, onSortHigh }) => {
    return (
        <MarginStyle>
            <ButtonStyle className={`btn ${state.low ? 'active' : ""}`} onClick={onSortLow}>낮은 가격순으로 정렬</ButtonStyle>
            <ButtonStyle className={`btn ${state.high ? 'active' : ""}`} onClick={onSortHigh}>높은 가격순으로 정렬</ButtonStyle>
        </MarginStyle>
    )
};

export default SortButton;
