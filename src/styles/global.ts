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
	.border{
		border: solid ;
	}
	select,input{
		padding: 0px;
		width: 100%;
		height: 30px;
		font-size: 15px ;
		padding-left:10px ;
		margin-bottom: 5px ;
		border-radius: 5px ;
		border: solid var(--borda) 2px;
	}
	button{
		width: 100%;
		height: 40px ;
		border: none ;
		padding: 20px ;
		border-radius: 5px ;
		color: var(--shape);
		background-color: var(--blue-light) ;
	}

	.display-flex{
		display: flex ;
		flex-direction: initial ;
	}
	.editar-excluir{
		width: 100% ;
		display: flex ;
		.editar{
			background: url("/icons/lapis.png");
			background-size: 80% 80%;
			background-repeat: no-repeat ;
			background-position: center ;
			border: solid ;
			width: 5%;
			height: 20px ;
		}
		.excluir{
			background-color: var(--red-light);
			border: solid ;
			width: 5% ;
			height: 20px ;
		}
		label{
			border: solid ;
			width: 90%;
		}
	}
	a{
		text-decoration: none ;
	}
`;

export const Container = styled.div`

	.none{
		display: none ;
	}
	.display-flex{
		display: flex;
	}


    @media (max-width: 767px) {
    
    }

    @media (min-width: 767px) {
		display: flex ;
		flex-direction: column ;
    }

`;

export const Conteudo = styled.div`

    @media (max-width: 767px) {

    }

    @media (min-width: 767px) {
		width: 600px ;
		height: 400px ;
		border: solid var(--borda) 2px;
        border-radius: 10px ;
        background-color: var(--backgroud-secundaria);
		padding: 20px ;
    }
`;
export const Header = styled.div`
	display: flex ;
	padding-top:30px ;
	margin-left:40px ;
	
`
export const Adicionar = styled.a`

		@media(max-width: 767px) {

		}

		@media(min-width: 767px) {
			margin: 20px ;
			padding: 10px 21px;
			height: 65px ;
			border-radius: 100px;
			background-color: var(--blue-light) ;
			text-decoration: none;
			font-size: 40px ;
			color: var(--shape);
		}

`;

export const Center = styled.div`
	display: flex;
	justify-content: center ;
`;
export const AdicionarItem = styled.div`
	width: 40px ;
	height: 40px ;
	align-items: center ;
	display: flex ;
	justify-content: center;
	font-size: 30px;
	border: solid ;
	border-radius: 10px ;
	position: absolute ;
	background-color:var(--blue-light) ;
	color: var(--shape) ;
`;
