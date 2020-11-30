import styled from 'styled-components';
import { Basic, Button, Line, Txt } from './variables';

const CartStyle = styled.div`
    .cartpage_wrap{
        display: flex;
        flex-direction: row;
        justify-content: center;
        width:80%;
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
        height:150px;
        padding-bottom:${Basic.paddingTop};
        margin:${Line.margin};
        .img_wrap{
            width:25%; 
            img{
                width:100px;
            }
        }
        .detail_wrap {
            position:absolute;
            width: 50%;
            left:25%;
            display: flex;
            line-height: 30px;
            flex-direction: column;
            .name {
                font-size: 1.1rem;
                font-weight: 600;
            }
            .price {
                font-size: 1.1rem;
                font-weight: 700;
                color: #333;
            }
            .cart-form{
                padding-top:1rem;
                display:flex;
                .select{
                    border:none;
                    padding:.1rem;
                    padding-right:.3rem;
                    margin-right:1rem;
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
        .confirmWindow {
            position: absolute;

            width:100%;
            height:100%;
            top:0;
            left:0;

            display:flex;
            flex-direction:column;
            justify-content: center;
            align-items:center;

            background-color:rgba(255,255,255,0.9);
            transform: translateY(2rem);
            transition: all ease .5s;
            opacity: 0;
            visibility: hidden;
            
            .txt{
                font-size: 1rem;
                color: black;
                padding:${Basic.paddignTop};
            }
            button {
                outline: none;
                background: #fff;
                color: black;
                border:2px solid black;
                padding:0.3rem 0.8rem;
                margin:0 0.1rem;
                border-radius:${Button.radius};
                &:hover {
                    outline: none;
                    background: tomato;
                    color: #fff;
                    border:2px solid tomato;
                }
            }
            .go {
                color: #fff;
                background-color: black;
                border-radius: 4px;
                margin-right: 10px;
            }
            &.displayBlock {
                opacity: 1;
                visibility: visible;
                transform: translateY(0rem);
            }
        }
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
`

export { CartStyle, CartItemStyle, SumStyle };
