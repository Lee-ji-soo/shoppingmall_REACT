import React, { useState, useRef, useEffect } from 'react';
import { MainBannerStyle } from '../styled';

const MainBanner = () => {
    const cartRef = useRef();
    const [turn, setTurn] = useState(false);

    let x = 0;
    let vx = 2;
    let stageWidth = document.body.clientWidth;

    const resize = () => {
        stageWidth = document.body.clientWidth;
    };

    const animate = () => {
        x += vx;
        if (x > stageWidth - 150) {
            vx *= -1;
            setTurn(true);
        } else if (x < -50) {
            vx *= -1;
            setTurn(false);
        }
        cartRef.current.style.left = x + 'px';
        requestAnimationFrame(animate);
    };

    useEffect(() => {
        window.requestAnimationFrame(animate);
        window.addEventListener('resize', resize);
    }, [])

    return (
        <MainBannerStyle>
            <article>
                <section id='top-img'>
                    <img ref={cartRef} className={`shoppingCart ${turn ? '' : 'right'}`} src={`https://www.clipartkey.com/mpngs/m/197-1977444_shopping-cart-drawing.png`} />
                </section>
                <div className='top-txt'>
                    <p className="txt">SHOPP</p>
                </div>
            </article>
        </MainBannerStyle>
    )
}

export default MainBanner;
