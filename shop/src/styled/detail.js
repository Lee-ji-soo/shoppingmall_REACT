import styled from 'styled-components';
import { Basic, Button, Line, Txt } from './variables';

const DetailInfoStyle = styled.div`
    display:flex;
    justify-content:center;
    margin-bottom:${Basic.paddingTop};
    .btn{
        cursor:pointer;
        font-size:.9rem;
        background:none;
        border:${Button.border};
        padding:${Button.padding};   
        border-radius:${Button.radius};   
        &:hover{
            background-color:#333;
            color:white;
        }
    }
    .img_BOX{
        width:300px;
        height:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        .imgs_wrap{
            width:100%;
            height:100%;
            overflow:hidden;
            .imgs{
                display:flex;
                width:100%;
                height:100%;
                img{
                    width:100%;
                }
            }
        }
        .btn_wrap{
            margin-top:${Line.marginBottom};
            height:max-content;
            .btn{
                margin:0 0.2rem;
            }
        }
    }
    .info_BOX{
        width:350px;
        margin-left:2rem;
        .info_wrap{
            height:160px;
            display:flex;
            flex-direction: column;
            justify-content: center;
            .txt{
                margin-bottom:${Txt.marginBottom};
            }
            .name{
                font-size:1.7rem;
                font-weight:bold;
            }
            .brand{
                font-size:1rem;
                font-weight:300;
            }
            .price{
                font-size:1.2rem;
                font-weight:700;
            }
            
        }
        .select_wrap{
            display:flex;
            width:100%;
            align-items: center;
            .form_wrap{
                width:100%;
                .line{
                    display:flex;
                    margin-bottom:${Line.marginBottom};
                    width:100%;
                    align-items: center;
                    label{
                        width:20%;
                    }
                    input,.select{
                        border:${Button.border};
                        padding:${Button.padding};   
                        border-radius:${Button.radius};   
                    }
                    .select{
                        width:85%;
                        box-sizing:border-box;
                    }
                }
                .btn{
                    margin-top:${Line.marginBottom};
                    background-color:black;
                    color:white;
                    border-radius:3px;
                    width:100%;
                    padding:0.7rem;
                    &:hover{
                        background-color:#222;
                    }
                }
            }
        }
    }
    
    @media (max-width:758px){
        width:85%;
        margin:0 auto;
        flex-direction:column;
        margin-bottom:${Basic.paddingTop};
        .img_BOX{
            width:80%;
            margin:0 auto;
        }
        .info_BOX{
            width:100%;
            margin:0 auto;
        }
 }
`

const TabStyle = styled.section`
    width:100%;
    max-width:900px;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    .tab_wrap{
        ul{
            display: flex;
            flex-direction: row;
            text-align:center;
            cursor:pointer;
            .tab_btn{
                width:100%;
                height:20%;
                padding:${Button.padding};
                text-decoration: none;
                color:grey;
                border-bottom:${Button.border};
                &.orange{
                    border-top: 2px solid orange;
                    border-right: 1px solid #ccc;
                    border-bottom: 1px solid white;
                    border-left: 1px solid #ccc;
                    color: orange;
                    margin-top: -2px;
                }
            }
        }
    }
    .con_wrap{
        .tab_content{
            display: none;
            height:100px;
            padding:1rem;
            &.show{
                display: block;
            }
        }
    }
`
export { DetailInfoStyle, TabStyle };
