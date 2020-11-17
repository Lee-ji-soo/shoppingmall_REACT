import styled from 'styled-components';
import { Button, Line, Strong } from './variables';

const MainStyle = styled.section`
    padding-top:60px;
    width:100%;
    height:max-content;
`
const LoginStyle = styled.section`
    width:35%;
    min-width:440px;
    margin:6rem auto;
        #modal_title{
        font-size:2rem;
        font-weight:bold;
        }
        #input-form {
            position:relative;
            .input{
                input[type=email],
                input[type=password]{
                    display: block;
                    margin:${Line.margin};
                    width: 100%;
                    padding: ${Button.padding};
                    box-sizing: border-box;
                    border: ${Button.border};
                    border-radius:${Button.radius};
                    font-size: 1.1rem;
                    font-weight: bold;
                    text-align: center;
                    }
            }
            .submit{
                button{
                    cursor:pointer;
                    background-color: white;
                    padding: ${Button.padding};
                    border-radius: ${Button.radius};
                    border:${Button.border};
                }
                #submit-btn{
                    width: 100%;
                    background-color: black;
                    color: white;
                        &:hover{
                            background-color: tomato;
                        }
                    }
                }
         }

 @media (max-width:758px){
    width:85%;
 }

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
export { MainStyle, FooterStyle, LoginStyle, Warning }
