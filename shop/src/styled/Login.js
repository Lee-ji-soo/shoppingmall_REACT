import styled from 'styled-components';
import { Input, Line } from './variables';

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
                    padding: ${Input.padding};
                    box-sizing: border-box;
                    border: ${Input.border};
                    border-radius:${Input.radius};
                    font-size: 1.1rem;
                    font-weight: bold;
                    text-align: center;
                    }
            }
            .submit{
                button{
                    cursor:pointer;
                    background-color: white;
                    padding: ${Input.padding};
                    border-radius: ${Input.radius};
                    border:${Input.border};
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
export { LoginStyle };
