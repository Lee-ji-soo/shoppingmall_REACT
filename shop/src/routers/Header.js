import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authAction } from '../actions';
import { HeaderStyle } from '../styled';

const Header = () => {
    const dispatch = useDispatch();
    const logged = useSelector(({ authReducer }) => authReducer.logged);
    const [openNav, setopenNav] = useState(false);

    const handleLogin = () => {
        logged
            ? dispatch(authAction.logout())
            : null;
    }

    const handleAccess = () => {
        logged
            ? null
            : alert('로그인이 필요합니다.')
    }

    const handleNavMo = () => {
        setopenNav(!openNav);
    }

    const reload = (location) => {
        // window.location.href = `/${location}`;
    }

    return (
        <HeaderStyle>
            <div id='navigation'>
                <h1><Link to='/main'>SHOPPP</Link></h1>
                <section className={`nav_hamburger ${openNav ? 'open' : ''}`} onClick={handleNavMo}>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </section>
                <ul className={`nav_ul ${openNav ? 'open' : ''}`}>
                    <li>
                        <Link to='/main' onClick={() => { reload('main') }}>MAIN</Link>
                    </li>
                    <li onClick={handleAccess}>
                        <Link to='/cart' onClick={() => { reload('cart') }}>CART</Link>
                    </li>
                    <li onClick={handleAccess}>
                        <Link to='/mypage' onClick={() => { reload('mypage') }}>MYPAGE</Link>
                    </li>
                    <li onClick={handleLogin}>
                        <Link to='/login' onClick={() => { reload('login') }}>{logged ? 'LOGOUT' : 'LOGIN'}</Link>
                    </li>
                </ul>
            </div>
        </HeaderStyle>
    )
};

export default Header;
