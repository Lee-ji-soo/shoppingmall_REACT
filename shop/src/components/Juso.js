import React from 'react';
import { ButtonStyle, JusoStyle } from '../styled';

const Juso = ({ keyword, keyword2, handleInput, handleSearchJuso, total, page, onPrev, onNext, list }) => {
    return (
        <JusoStyle className={`juso_wrap`}>
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
