import React from 'react';
import { useSelector } from 'react-redux';
import { MainStyle, NoScrollpage, FormStyle } from '../styled';

const Mypage = () => {
    const user = useSelector(({ mypageReducer }) => mypageReducer.user);
    const { name, mail, phone, juso } = user
    return (
        <MainStyle>
            <NoScrollpage>
                <FormStyle>
                    <h3>{name}<span>님, 안녕하세요!</span></h3>
                    <div className='info_wrap'>
                        <p><div className='txt type'>이메일</div><span className='txt con'>{mail}</span></p>
                        <p><div className='txt type'>핸드폰</div><span className='txt con'>{phone}</span></p>
                        <p className='juso_form'><div className='txt type'>주소</div><span className='txt con'>{juso}<button>변경</button></span></p>
                    </div>
                </FormStyle>
            </NoScrollpage>
        </MainStyle >
    )
};

export default Mypage;
