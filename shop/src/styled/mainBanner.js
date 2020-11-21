import styled from 'styled-components';
import { Basic, Button } from './variables';

const MainBannerStyle = styled.section`
    padding:${Basic.padding};
    background-color:black;
    height:max-content;
    position:relative;
        #top-img{
            padding-top:${Basic.paddingTop};
             width:100%;
             height:180px;
             filter:invert(1);;
            .shoppingCart{
                width:120px;
                position:absolute;
                &.right{
                    transform: scaleX(-1);
                }
            }
        }
        .top-txt{
            position:absolute;
            left:10%;
            top:50%;
            transform:translateY(-50%);
            font-size:3rem;
            font-family: 'Lato';
            color:white;
            .txt{
             text-align:center; 
            }
        }
`
export { MainBannerStyle }
