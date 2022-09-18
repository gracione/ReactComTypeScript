import styled from "styled-components";

export const Container = styled.button`
    display: flex ;
    width: 100% ;
    height: 130px ;
    form{
        display: flex;
        width: 100% ;
    }
`;

export const CardFuncionario = styled.button`
        input{
            display: none ;
        }
        label{
            width: 100% ;
            height: 100% ;
            font-size: 15px !important ;
        }
        width: 80px;
        height: 100px ;
        border: solid var(--borda) 2px;
        border-radius: 10px ;
        margin-left: 10px;

        display: flex;
        flex-direction: column ;
        justify-content: center ;
        align-items: center;
`;

export const CardAdicionarFuncionario = styled.button`
    @media (min-width: 767px) {
        width: 80px;
        height: 100px ;
        border: solid var(--blue-light) 2px;
        border-radius: 10px ;
        margin-left: 10px;

        display: flex;
        flex-direction: column ;
        justify-content: center ;
        align-items: center;

        background-color: var(--blue-light) ;
        color: var(--shape) ;
    }

`;
