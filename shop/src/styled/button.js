import styled from 'styled-components';
import { Button } from './variables';

const ButtonStyle = styled.button`
        cursor:pointer;
        padding:${Button.padding};
        margin-left:30px;
        border-radius:${Button.radius};
        border:${Button.border};
        background-color:${Button.backgroundColor};
        font-size:${Button.fontSize};
        &.active,
        &:hover{
            color:#fff;
            background-color:#333;
        }
`
export { ButtonStyle };
