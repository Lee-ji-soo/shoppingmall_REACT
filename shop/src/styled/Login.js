import styled from 'styled-components';
import { Input, Line } from './variables';

const LoginStyle = styled.section`
    width:35%;
    height:55vh;
    min-width:440px;
    margin:6rem auto;
        #modal_title{
        font-size:2rem;
        font-weight:bold;
        }
        #input-form {
            position:relative;
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
    min-width:310px;
 }

`
export { LoginStyle };
