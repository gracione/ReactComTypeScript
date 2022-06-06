import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root {
		--backgroud: #ED00B9;
		--red: #E52E4D;
		--green: #33cc95;
		--blue: #5429CC;

		--cor-secundaria: #969CB3;

		--blue-light: #6933FF;

		--text-title: white;
		--text-body: #969CB3;

	}

	* {
		margin:0;
		padding:0;
		outline:none;
		box-sizing: border-box;
	}

`;
