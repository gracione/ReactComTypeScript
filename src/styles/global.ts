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
	select,input{
		padding: 0px;
		width: 100%;
		height: 40px;
		font-size: 15px ;
		padding-left:10px ;
		margin-bottom: 10px ;
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
		form {
			display: flex ;
			width: 100%;
				button{
					margin: 0px ;
					padding: 0px ;
					width: 15% ;
					height: 100% ;
					display: flex ;
					justify-content: space-around ;
					background: none;
				}
				input[type=text] {
					width: 85% ;
				}
				input[type=radio] {
					display: none ;
				}
				label{
					width: 45%;
					border-radius: 10px ;
					height: 35px ;
					font-size: 35px ;

					display: flex ;
					justify-content: center ;
					align-items: center ;
				}
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
		.editar{
			background: url("/icons/lapis.png");
			background-size: 80% 80%;
			background-repeat: no-repeat ;
			background-position: center ;
		}
		.excluir{
			background-color: var(--red-light);
		}
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
