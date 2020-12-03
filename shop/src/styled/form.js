import styled from 'styled-components';
import { Basic, Button, Input, Line } from './variables';

const InputStyle = styled.div`
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
`

const FormStyle = styled.div`
    padding-top:${Basic.paddingTop};
    width:90%;  
    height:max-content;
    margin:0 auto;
    .juso_wrap{
    }
    .info_wrap{
        width:100%;
        padding-top:${Basic.midPaddingTop};
        div{
            width:100%;
            border-bottom:1px solid #eaeaea;
            .txt{
                padding:${Line.margin};
                padding-left:30px;
            }
            .type{
               box-sizing:border-box;
               display:inline-block;
               width:10%;
               min-width:130px;
               background-color:#f3f3f3;
            }
        }
    }
    @media (max-width:758px){
        .info_wrap{
            padding-top:${Basic.midPaddingTop};
            p{
                &:last-child{
                border-bottom:none;
                }
                .txt{
                    padding-left:30px;
                }
                display:flex;
                flex-direction:column;
                .type{
                    width:100%;
                }
                button{
                padding:${Button.padding};
            }
        }
 }
`

export { FormStyle, InputStyle }
