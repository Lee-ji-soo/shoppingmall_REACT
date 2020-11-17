import styled from 'styled-components';

const ListStyle = styled.ul`
    padding-top:2rem;
    padding-bottom:2rem;
    display:grid;
    grid-template-columns: repeat(4, minmax(250px, 1fr));
    grid-row-gap: 2.5rem;
    grid-column-gap:1rem;
        li{
            cursor:pointer;
            display:flex;
            justify-content: center;
            align-items: center;
            position:relative;
            width: 100%;
            height: auto;
            overflow:hidden;
            
        }
        
    @media screen and (max-width:992px){    
            grid-template-columns: repeat(3, minmax(0.5rem, 1fr));
            grid-row-gap: 2.5rem;
            grid-column-gap:1rem
        }

    @media screen and (max-width:768px){   
            grid-template-columns: repeat(2, minmax(200px, 1fr));
            grid-row-gap: 2.5rem;
            grid-column-gap:1rem
        }

    @media screen and (max-width:576px){    
            grid-template-columns: repeat(1, minmax(300px, 1fr));
            grid-row-gap: 2.5rem;
        }
    
`

const Item = styled.li`
    img{
        width:70%;
    }
    .info{
        opacity:0;
        visibility:hidden;
        position:absolute;
        cursor:pointer;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color:rgba(255, 255, 255, 0.666);
        width:100%;
        height:100%;
        line-height:1.5rem;
        font-size:1rem;
        transition:opacity 0.3s ease-in-out;
        &.displayBlock{
            opacity:1;
            display:flex;
            visibility:visible;
        }
        .txt{
           padding-bottom:0.6rem;
        }
        .brand{
           font-weight:700;
        }
        .price{
            font-weight:700;
        }
    }
`

export { ListStyle, Item }
