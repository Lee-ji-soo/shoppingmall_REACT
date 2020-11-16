import React from 'react';
import { FooterStyle } from '../styled/style';

const Footer = () => {
    return (
        <FooterStyle>
            <section className="con-wrap">
                <p className="con-txt con">
                    This is a simple hero unit, a simple jumbotron-style component for calling extra
                    attention to featured content or information.</p>
                <p className="con-txt con">
                    It uses utility classes for typography and spacing to space content out within the
                    larger container.</p>
                <p className="con-txt con license">
                    This Shop's image and information license all belong to ©SOOSHOP</p>
            </section>
        </FooterStyle>
    )
};

export default Footer;
