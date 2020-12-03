import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MainStyle, NoScrollpage, FormStyle, ButtonStyle } from '../styled';
import { api } from '../utils/api';
import { Juso } from '../components';

const Mypage = () => {
    const user = useSelector(({ mypageReducer }) => mypageReducer.user);
    const { name, mail, phone } = user;
    const [juso, setJuso] = useState(user.juso);
    const [keyword, setKeyword] = useState('');
    const [keyword2, setKeyword2] = useState('');
    const [page, setPage] = useState(1);
    const [list, setList] = useState([]);
    const [total, setTotal] = useState(0);
    const [openJuso, setOpenJuso] = useState(false);

    const onNext = (e) => {
        setPage(page + 1);
    };

    const onPrev = (e) => {
        setPage(page - 1);
    };

    const handleOpen = () => {
        setOpenJuso(true)
    };

    const handleClose = () => {
        setOpenJuso(false)
    };

    const handleInput = (e) => {
        const { target: { value } } = e;
        setKeyword(value);
    };

    const handleClickJuso = (nextAddr) => {
        setJuso(nextAddr);
        setOpenJuso(false)
    };

    const handleSearchJuso = (e) => {
        setKeyword2(keyword);
        fetchJuso();
    }

    const refreshInput = () => {
        setKeyword('');
    }

    async function fetchJuso() {
        const data = await api.fetchJuso({ page, keyword2 });
        const { results: { juso, common: { totalCount } } } = await data;
        if (juso) {
            await setList(juso);
            await setTotal(totalCount);
        } else {
            await setTotal(totalCount);
            await setList([]);
        }
        refreshInput();
    }

    useEffect(() => {
        fetchJuso();
    }, [keyword2, page])


    return (
        <MainStyle>
            <NoScrollpage>
                <FormStyle>
                    <h3>{name}<span>님, 안녕하세요!</span></h3>
                    <Juso
                        openJuso={openJuso}
                        keyword={keyword}
                        keyword2={keyword2}
                        handleInput={handleInput}
                        handleClose={handleClose}
                        handleClickJuso={handleClickJuso}
                        handleSearchJuso={handleSearchJuso}
                        total={total}
                        page={page}
                        onNext={onNext}
                        onPrev={onPrev}
                        list={list} />
                    <div className='info_wrap'>
                        <div>
                            <div className='txt type'>이메일</div>
                            <span className='txt con'>{mail}</span>
                        </div>
                        <div>
                            <div className='txt type'>핸드폰</div>
                            <span className='txt con'>{phone}</span>
                        </div>
                        <div className='juso_form'>
                            <div className='txt type'>주소</div>
                            <span className='txt con'>{juso}
                                <ButtonStyle onClick={handleOpen}>변경</ButtonStyle>
                            </span>
                        </div>
                    </div>
                </FormStyle>
            </NoScrollpage>
        </MainStyle>
    )
};

export default Mypage;
