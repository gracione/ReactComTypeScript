import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .horario-disponivel{
        margin: 1px ;
        width: 20%;
        height: 30px ;
        border-radius: 4px ;
        margin-top: 5px ;
        background-color:var(--blue-light);

        display: flex;
        justify-content: center ;
        align-items: center ;

        input{
            display: none ;
        }
        &:active {
            opacity: 0.6;
        }
    }
`;

export const HorariosDisponivel = styled.div`
    width: 100% ;

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;