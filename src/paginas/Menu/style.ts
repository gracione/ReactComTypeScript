import styled from "styled-components";

export const Container = styled.div`
    background: var(--backgroud);
    color: var(--text-title);

    img {
        width: 50px;
        height:50px;
    }

    @media (max-width: 767px) {
        display: flex;
        justify-content: space-between;
        .item-menu-movel {
            display: block;
        }
    
        .item-menu-desktop {    
            display: none;
        }
    
        .menu-section nav {
            display: none;
        }
    
        nav a {
            display:flex;
            flex-direction: column;
            justify-content: space-between;
            align-items:center;

            text-decoration:none;
            font-size:4vh;

            height:7vh;
            color: var(--text-title);
        }

        nav {
            color: white ;
            margin:10vh;
        }
        
    
    }

    @media (min-width: 767px) {
        width: 100%;
        height: 5vh;
        display: flex;
        justify-content: space-between;
        padding: 20px ;
        align-items: center;
        a{
            color: white ;
            text-decoration: none ;
            font-size: 25px ;
        }
    }

`;