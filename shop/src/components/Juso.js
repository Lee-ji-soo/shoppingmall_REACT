import React from 'react';
import { ButtonStyle, JusoStyle } from '../styled';

const Juso = ({ openJuso, keyword, keyword2, handleInput, handleClose, handleClickJuso, handleSearchJuso, total, page, onPrev, onNext, list }) => {
    return (
        <JusoStyle className={`${openJuso ? 'visible' : ''} juso_wrap`}>
            <ButtonStyle className='close_btn' onClick={handleClose}>X</ButtonStyle>
            <div className='title_wrap'>
                <h2>도로명 검색</h2>
                <h3>찾고 싶은 주소의 도로명을 입력하세요.</h3>
                <p> 예) 토정로, 토정로2길, 내정로</p>
            </div>
            <div className='input_wrap'>
                <input value={keyword} onChange={handleInput} />
                <button onClick={handleSearchJuso}>주소 검색</button>
            </div>
            <div className='total_state'>
                {
                    total > 0
                        ? <p>'{keyword2}'에 대한 검색결과 ({total})건</p>
                        : <p>검색결과가 없습니다.</p>
                }
            </div>
            <ul className='list_wrap'>
                {list.map((li, index) =>
                    <li onClick={() => { handleClickJuso(li.roadAddr) }} key={`juso${index}`} >
                        <p>{li.roadAddr}</p>
                    </li>
                )}
            </ul>
            <div className='state_wrap'>
                {
                    page > 1
                        ? (<button onClick={onPrev}>〈</button>)
                        : null
                }
                {<p>[{list.length > 1 ? page : 0}]</p>}
                {
                    page >= Math.ceil(total / 10)
                        ? null
                        : (<button onClick={onNext}>〉</button>)
                }
            </div>
        </JusoStyle>
    )
};

export default Juso;
