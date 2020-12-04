import styled from 'styled-components';
import { Basic, Input, Line } from './variables';

const HeaderStyle = styled.section`
    padding:${Basic.padding};
    position:fixed;
    z-index:99;
    width:100vw;
    height:3.5rem;

    background-color:rgba(255, 255, 255, 0.664);
    box-sizing: border-box;
    #navigation{
        width:100%;
        height:${Basic.height};
        display:flex;
        margin-top:.5rem;

        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;

        h1{
            color:#333;
            font-size:1.5rem;
            font-weight:800;        
        }
        .nav_ul{
            display:flex;
            li{
                color:#333;
                font-weight:700;
                padding:${Line.marginLR};
                &:hover{
                    text-decoration: underline;
                }
            } 
        }
    }
    @media(max-width:700px){
        padding:${Basic.lowPadding};
        .nav_hamburger{
            position:absolute;
            z-index:18;
            top:1rem;
            right:1rem;
            transition:all 0.5s ease;
            .line{
                width: 35px;
                height: 3px;
                background-color: black;
                margin-bottom: 6px;
                cursor:pointer;
                transition:all 0.5s ease;
            }
            &.open{
                transform: rotate(180deg); 
                .line:nth-child(1){
                    transform: rotate(45deg) translate(5px, 5px); 
                }
                .line:nth-child(2){
                    opacity: 0; 
                }
                .line:nth-child(3){
                    transform: rotate(-45deg) translate(8px, -6px); 
                }
            }
        }
        .nav_ul{
            position:absolute;
            width:100%;
            height:400px;
            top:0%;
            left:130%;
            text-align:center;
            display:flex;
            flex-direction:column;
            margin-left:-1rem;
            background-color:rgba(255,255,255,0.9);
            transition:all 1s ease;
            li{
                font-size:1.5rem;
                position:absolute;
                top:0%;
                width:100%;
                left:100%;
                transition:all 1s ease;
                &:nth-child(1){
                    top:10%;
                    transition-delay: 0.1s; 
                }
                &:nth-child(2){
                    top:30%;
                    transition-delay: 0.2s; 
                }
                &:nth-child(3){
                    top:50%;
                    transition-delay: 0.3s; 
                }
                &:nth-child(4){
                    top:70%;
                    transition-delay: 0.4s; 
                }
            }
            &.open{
                left:4%;
                li{
                    left:0%;
                }
            }
        }
    }
`

export { HeaderStyle };
