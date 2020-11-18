import styled from 'styled-components';
import { Basic } from './variables';

const MainBannerStyle = styled.section`
    padding:${Basic.padding};
    padding-top:90px;
    height:max-content;
        #top-img{
             width:100%;
             height:220px;
             filter:brightness(120%);
            .shoppingCart{
                width:10rem;
                position:absolute;
                &.right{
                    transform: scaleX(-1);
                }
            }
        }
`
export { MainBannerStyle }
