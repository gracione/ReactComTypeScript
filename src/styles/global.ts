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
		form{
			width: 100% ;
			height: 100% ;
			display: flex ;
			flex-direction: column 2 !important;
			justify-content: space-between;
			input{
				height: 35px ;
			}
			select{
				height: 20px ;
			}
			option{
				font-size: 20px !important ;
				height: 20px ;
			}
			button{
				width: 100%;
				height: 40px ;
				border: none ;
				border-radius: 5px ;
				color: var(--shape);
				background-color: var(--blue-light) ;
				top: 200px ;
			}
		}
		.editar-excluir{
			form{
				width: 100% 1 !important;
				flex-direction: column-reverse 1 !important;
				button{
					margin: 0px ;
					padding: 0px ;
					width: 20% ;
					height: 100% ;
					display: flex ;
					justify-content: space-around ;
					background: none;
				}
				input[type=text] {
					width: 85% ;
				}
				input[type=radio] {
					width: 5px ;
					display: none ;
				}
				label{
					width: 46% !important;
					border-radius: 10px ;
					height: 35px ;
					font-size: 35px ;

					display: flex ;
					justify-content: center ;
					align-items: center ;
				}
			}
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
