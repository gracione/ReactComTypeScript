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
    
        .one,
        .two,
        .three {
            background-color: #ffffff;
            height: 5px;
            width: 40px;
            margin: 6px auto;
            transition-duration: 0.3s;
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
            margin:10vh;
        }
        
        .menu-toggle {
            width: 6px;
            margin: 10px 50px;
        }
    
        .menu-section.on {
            position: absolute;
            width: 100%;
            height: 100vh;
            background: var(--backgroud);
        }
    
        .menu-section.on nav {
            display: block;
        }
    
    
        .menu-section.on .menu-toggle {
            position: absolute;
            right: 25px;
            top: 25px;
        }
    
    
        .menu-section.on .menu-toggle .one {
            transform: rotate(45deg) translate(7px, 7px);
        }
    
        .menu-section.on .menu-toggle .two {
            opacity: 0;
        }
    
        .menu-section.on .menu-toggle .three {
            transform: rotate(-45deg) translate(8px, -9px);
            background-color: #fff;
        }
    
    }

    @media (min-width: 767px) {
        width: 50px;
        height: 100vh;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        nav {
            display:flex;
            flex-direction: column;
            justify-content: space-between;
            align-items:center;
    
            height:70vh;
            color: var(--text-title);
        }
    
        .menu-section {
            height: 85%;
        }
      
        .item-menu-movel {
            display: none;
        }
        
        .item-menu-desktop {
            width: 30px;
            height: 25px;
            display: block;
            color: var(--text-title);
        }
    }

`;