import React from 'react';
import { ButtonStyle } from '../styled';

const Juso = ({ keyword, keyword2, handleInput, handleSearchJuso, total, list }) => {
    return (
        <div className={`juso_wrap`}>
            <div className='input'>
                <input value={keyword} onChange={handleInput} />
                <ButtonStyle onClick={handleSearchJuso}>검색</ButtonStyle>
            </div>
            {
                total > 0
                    ? <p>'{keyword2}'에 대한 검색결과 ({total})건</p>
                    : <p>검색결과가 없습니다.</p>
            }
            <ul>
                {list.map((li, index) =>
                    <li key={`juso${index}`} >
                        <p>{li.jibunAddr}</p>
                        <p>{li.roadAddr}</p>
                    </li>
                )}
            </ul>
        </div>
    )
};

export default Juso;
