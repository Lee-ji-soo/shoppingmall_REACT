import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthAction } from '../actions';

const Header = () => {
    const dispatch = useDispatch();
    const logged = useSelector(({ authReducer }) => authReducer.logged);

    const handleLogin = () => {
        logged
            ? dispatch(AuthAction.logout())
            : null;
    }

    const handleAccess = () => {
        logged
            ? null
            : alert('로그인이 필요합니다.')
    }

    return (
        <section id='header'>
            <div id='navigation'>
                <h1>SHOPPP</h1>
                <ul>
                    <li onClick={handleLogin}>
                        <Link to='/login'>{logged ? 'LOGOUT' : 'LOGIN'}</Link>
                    </li>
                    <li>
                        <Link to='/main'>MAIN</Link>
                    </li>
                    <li onClick={handleAccess}>
                        <Link to='/cart'>CART</Link>
                    </li>
                    <li onClick={handleAccess}>
                        <Link to='/mypage'>MYPAGE</Link>
                    </li>
                </ul>
            </div>
        </section>
    )
};

export default Header;
