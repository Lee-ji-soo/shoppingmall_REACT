import React, { useState, useRef, useEffect } from 'react';
import { MainBannerStyle } from '../styled/mainBanner';

const MainBanner = () => {
    const cartRef = useRef();
    let x = 0;
    let vx = 2;
    const [turn, setTurn] = useState(false);
    let stageWidth = document.body.clientWidth;

    const resize = () => {
        stageWidth = document.body.clientWidth;
    };

    const animate = () => {
        console.log(stageWidth)
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

    window.requestAnimationFrame(animate);
    window.addEventListener('resize', resize);

    useEffect(() => {
        console.log('useEffect', cartRef)
    }, [])

    return (
        <MainBannerStyle>
            <article>
                <section id='top-img'>
                    <img ref={cartRef} className={`shoppingCart ${turn ? '' : 'right'}`} src={`https://www.clipartkey.com/mpngs/m/197-1977444_shopping-cart-drawing.png`} />
                </section>
                <div className='topbanner-con'>
                    <p className="con">
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                </p>
                    <p className="con">
                        It uses utility classes for typography and spacing to space content out within the
                        larger container.
                </p>
                </div>
            </article>
        </MainBannerStyle>
    )
}

export default MainBanner;
