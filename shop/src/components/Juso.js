import React from 'react';
import { ButtonStyle, JusoStyle } from '../styled';

const Juso = ({ openJuso, keyword, keyword2, handleInput, handleClose, handleClickJuso, handleSearchJuso, total, page, onPrev, onNext, list }) => {
    return (
        <JusoStyle className={`${openJuso ? 'visible' : ''} juso_wrap`}>
            <ButtonStyle onClick={handleClose}>X</ButtonStyle>
            <h2>도로명 검색</h2>
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
                    <li onClick={() => { handleClickJuso(li.roadAddr) }} key={`juso${index}`} >
                        <p>{li.roadAddr}</p>
                    </li>
                )}
            </ul>
            {   <p>{list.length > 1 ? page : 0}페이지</p>}
            {
                page > 1
                    ? (<button onClick={onPrev}>prev</button>)
                    : null
            }
            {
                page >= Math.ceil(total / 10)
                    ? null
                    : (<button onClick={onNext}>next</button>)
            }
        </JusoStyle>
    )
};

export default Juso;
