import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const logged = useSelector(({ authReducer }) => authReducer.logged);

    return (
        <section id='header'>
            <div id='navigation'>
                <h1>SHOPPP</h1>
                <ul>
                    <li>
                        <Link to='/login'>{logged ? 'LOGOUT' : 'LOGIN'}</Link>
                    </li>
                    <li>
                        <Link to='/main'>MAIN</Link>
                    </li>
                    <li>
                        <Link to='/cart'>CART</Link>
                    </li>
                    <li>
                        <Link to='/mypage'>MYPAGE</Link>
                    </li>
                </ul>
            </div>
        </section>
    )
};

export default Header;
