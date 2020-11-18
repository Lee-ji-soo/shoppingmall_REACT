import styled from 'styled-components';
import { Basic, Button } from './variables';

const DetailInfo = styled.div`
    display:flex;
    justify-content:center;
    .img_wrap{
        width:300px;
        height:100%;
        img{
            width:100%;
        }
        .btn{
            width:30%;
            margin:0 auto;
            font-size:.6rem;
            background:none;
            width:2.5rem;
            height:2.5rem;
            border:${Button.border};
            border-radius:${Button.radius};
        } 
    }
    .info_wrap{
        height:400px;
        margin-left:2rem;
        display:flex;
        flex-direction: column;
        justify-content: center;
        .name{
            font-size:2rem;
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
`

export { DetailInfo };
