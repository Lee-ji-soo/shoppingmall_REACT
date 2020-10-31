import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <section id='header'>
            <div id='navigation'>
                <h1>SHOPPP</h1>
                <ul>
                    <li>
                        <Link to='/login'>LOGIN</Link>
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
