import styled from 'styled-components';
import { Basic, Button, Line } from './variables';

const JusoStyle = styled.div`
    visibility:visible;
    opacity:1;
    position:absolute;
    width:500px;
    height:400px;
    background-color:white;
    padding:${Basic.paddingAround};
    border:${Button.border};
    box-sizing:border-box;
    top:100px;
    left:50%;
    transform:translate(-50%);
    p{
         font-size:0.9rem;
         font-weight:300;
         margin-bottom:${Line.marginMidBottom};
    }
    &.visible {
        opacity: 1;
        visibility: visible;
    }
    .close_btn{
        position:absolute;
        top:.5rem;
        right:.5rem;
        border:none;
    }
    .title_wrap{
        h2{
            margin-bottom:${Line.marginBottom};
        }
        h3{
            font-size:0.9rem;
            font-weight:300;
            margin-bottom:${Line.marginMidBottom};
        }
    }
    .input_wrap{
        display:flex;
        align-items:center;
        padding-bottom:${Basic.lowPaddingTop};
        border-bottom:${Button.border};
        input{
            height:30px;
            box-sizing:border-box;
            line-height:1.6rem;
            border-radius:0;
            text-align:center;
        }
        button{
            height:30px;
            cursor:pointer;
            font-size:0.9rem;
            padding:${Button.padding};
            box-sizing:border-box;
            border:none;
            background-color:#333;
            color:white;
        }
    }
    .total_state{
        margin-top:${Basic.lowPaddingTop};
    }
    .list_wrap{
        width:100%;
        max-height:150px;
        overflow-y:scroll;
        li{
            cursor:pointer;
            margin:${Line.margin};
        }
    }
    .state_wrap{
        width:150px;
        margin:0 auto;
        margin-top:${Basic.lowPaddingTop};
        display:flex;
        justify-content:center;
        align-items:center;
        button,p{
            line-height:20px;
        }
        button{
            cursor:pointer;
            border:none;
            background:none;
        }
        p{
            margin-bottom:0;
        }
    }
`

export { JusoStyle };
