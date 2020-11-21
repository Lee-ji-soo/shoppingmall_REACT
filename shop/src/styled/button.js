import styled from 'styled-components';
import { Basic, Button } from './variables';

const ButtonStyle = styled.section`
    padding:${Basic.padding};
    padding-top:${Basic.paddingTop};
    padding-bottom:50px;
    .btn{
        cursor:pointer;
        background-color:#fff;
        margin-right:1rem;
        padding:${Button.padding};
        border-radius:${Button.radius};
        font-size:${Button.fontSize};
        &:hover,
        &.active{
            background-color:black;
            color:white;
        }
    }
`
export { ButtonStyle };
