import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root {
		--backgroud: #ED00B9;
		--backgroud-secundaria: #EAEAED;
		--borda: #D0B6B6;
		--red: #E52E4D;
		--green: #33cc95;
		--blue: #753FE7;

		--cor-secundaria: #969CB3;

		--blue-light: #5090F3;
		--red-light: #FF5353;

		--text-title: #363F5F;
		--text-body: #969CB3;

		--shape: #FFF;
	}

	* {
		margin:0;
		padding:0;
		outline:none;
		box-sizing: border-box;
	}

`;

export const Container = styled.div`

    @media (max-width: 767px) {
    
    }

    @media (min-width: 767px) {
    }

`;

export const Conteudo = styled.div`

    @media (max-width: 767px) {

    }

    @media (min-width: 767px) {
        display: flex;
        flex-wrap: wrap;
        padding: 25px ;
        justify-content: space-around ;
    }
`;
