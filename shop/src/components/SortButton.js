import React from 'react';
import { SortButtonStyle } from '../styled';

const SortButton = ({ state, onSortLow, onSortHigh }) => {
    return (
        <SortButtonStyle>
            <button className={`btn ${state.low ? 'active' : ""}`} onClick={onSortLow}>낮은 가격순으로 정렬</button>
            <button className={`btn ${state.high ? 'active' : ""}`} onClick={onSortHigh}>높은 가격순으로 정렬</button>
        </SortButtonStyle>
    )
};

export default SortButton;
