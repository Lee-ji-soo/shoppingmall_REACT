import styled from 'styled-components';
import { Basic, Button, Line } from './variables';

const FormStyle = styled.div`
    padding-top:${Basic.paddingTop};
    width:90%;  
    height:max-content;
    margin:0 auto;
    .info_wrap{
        width:100%;
        padding-top:${Basic.midPaddingTop};
        p{
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
            button{
                cursor:pointer;
                padding:${Button.padding};
                margin-left:30px;
                border-radius:${Button.radius};
                border:${Button.border};
                background-color:${Button.backgroundColor};
                &:hover{
                    color:#fff;
                    background-color:#333;
                }
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

export { FormStyle }
