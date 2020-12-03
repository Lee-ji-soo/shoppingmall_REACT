import styled from 'styled-components';
import { Basic, Button, Input, Line } from './variables';

const JusoStyle = styled.div`
    visibility:hidden;
    opacity:0;
    position:absolute;
    top:100px;
    left:50%;
    transform:translate(-50%);
    &.visible {
        opacity: 1;
        visibility: visible;
        transform: translateY(0rem);
    }
    ul{
        width:100%;
        height:80%;
        max-height:350px;
        li{
            margin:${Line.margin};
        }
    }
`

export { JusoStyle };
