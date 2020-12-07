import styled from 'styled-components';
import { Basic, Line } from './variables';

const CartStyle = styled.div`
    height:80vh;
    overflow-y:scroll;
    .cartpage_wrap{
        display: flex;
        flex-direction: row;
        justify-content: center;
        width:80%;
        height:55vh;
        margin: 0 auto;
        .cartItems_wrap,
        .sum_wrap{
            padding: 1rem 2rem; 
        }
        h4{
            font-size: 1.5rem;
            font-weight:bold;
            border-bottom: 1px solid #a5a5a5;
            display: block;
            padding:1rem 0;
        }
    }
    @media (max-width:758px){
        .cartpage_wrap{
            width:90%;
            height:max-content;
            margin:0 auto;
            flex-direction:column;
            .cartItems_wrap,
            .sum_wrap{
                padding: 0;
            }
        }
    }
`

const CartItemStyle = styled.ul`
    width:45%;
    li{
        display:flex;
        flex-direction:row;
        align-items: center;
        position:relative;
        border-bottom: 1px solid #ededed;
        width: 100%;
        height:200px;
        padding-bottom:1rem;
        margin:${Line.margin};
        &:last-child{
            border-bottom:none;
        }
        .img_wrap{
            width:25%; 
            img{
                width:100px;
            }
        }
        .detail_wrap {
            position:absolute;
            width: 50%;
            left:30%;
            display: flex;
            line-height: 30px;
            flex-direction: column;
            .brand{
                font-size: .9rem;
                font-weight: 600;
            }
            .name {
                font-size: 1.1rem;
                font-weight: 300;
                line-height:1.3rem;
            }
            .price {
                padding-top:2rem;
                font-size: 1.1rem;
                font-weight: 700;
                color: #333;
            }
            .cart-form{
                padding-top:1rem;
                display:flex;
                flex-direction:column;
                label{
                }
                select{
                    border:none;
                    text-align:left;
                    font-size:1rem;
                }
            }
        }
        .cart_delte-btn {
            cursor:pointer;
            position: absolute;
            top:0;
            right:0;
            border: none;
            background: none;
            font-size: 1rem;
            color: #333;
            &:hover{
                color:tomato
            }
        } 
    }
    
    @media (max-width:758px){
        width:100%;
        }
`

const SumStyle = styled.div`
    background-color: white;
    margin: 0 1%;
    width: 25%;
    height: max-content;
    p{
        display:flex;
        flex-direction:row;

        width:100%;
        margin:${Line.margin};
        .tt{
            width:40%;
        }
        .con{
            width:60%;
            font-weight:700;
        }
    }
    @media (max-width:758px){
        width:100%;
        margin-bottom:${Basic.paddingTop};
    }
`

export { CartStyle, CartItemStyle, SumStyle };
