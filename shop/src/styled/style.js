import styled from 'styled-components';
import { Line, Strong, Basic } from './variables';

const MainStyle = styled.section`
    padding-top:${Basic.paddingTop};
    width:100%;
    height:max-content;
    box-sizing: border-box;
    list-style-type:none;
`

const NoScrollpage = styled.div`
    height:75vh;
`

const Warning = styled.p`
    font-weight:${Strong.fontWeight};
    color:${Strong.fontColor};
    font-size:${Strong.fontSize};
    margin:${Line.margin};
`

const FooterStyle = styled.footer`
    width: 100%;
    height: max-content;
    background-color:#222;
    color:#fff;
        .con-wrap{
        padding: 4rem;
        padding-top: 4rem;
        padding-bottom: 4rem;
            .con{
            font-family: 'Lato';
            line-height: 1.3rem;
            font-weight: 100;
                .license{
                font-weight: 400;
            }
        }
    }
`

export { MainStyle, NoScrollpage, FooterStyle, Warning }
