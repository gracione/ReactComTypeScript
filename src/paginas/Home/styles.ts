import styled from "styled-components";

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

    .agendar-horario{
        height: 350px ;

        display: flex ;
        flex-direction: column ;
        justify-content: space-between ;
    }

    label{
        font-size: 20px ;
        text-align: center;

        display: flex ;
        justify-content: center ;
    }
`;

export const AgendarHorario = styled.div`

    @media (max-width: 767px) {

    }

    @media (min-width: 767px) {
        width: 650px;
        height: 200px ;
        border: solid var(--borda) 2px;
        border-radius: 10px ;
        background-color: var(--backgroud-secundaria);
        align-items: center ;
        display: flex;
        flex-direction: column ;
        justify-content: space-around;
        form{
            height: 170px ;
            padding: 10px;
        }

        input{
            width: 90% ;
            font-size: 20px ;
            border: solid 1px;
            height: 30px;
            border-radius:5px ;
        }

    }

`;
export const CompartilheLink = styled.div`

    @media (max-width: 767px) {

    }

    @media (min-width: 767px) {
        width: 650px;
        height: 100px ;
        border: solid var(--borda) 2px;
        border-radius: 10px ;
        padding: 10px;
        background-color: var(--backgroud-secundaria);

        form{
            height: 50px ;
            display: flex ;
            justify-content: center ;
            align-items: center ;
        }
        input{
            margin: 0 ;
            width: 100% ;
            height: 30px;

            border: solid 1px;
            border-radius:5px ;
        }
        button {
            width: 30px ;
            border-radius:5px ;
            height: 30px;

        }
    }

`;
export const HorariosMarcados = styled.div`

    @media (max-width: 767px) {

    }

    @media (min-width: 767px) {
        width: 500px;
        height: 600px ;
        border: solid var(--borda) 2px;
        border-radius: 10px ;
        background-color: var(--backgroud-secundaria);

    }

`;
