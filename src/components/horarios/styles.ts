import styled from "styled-components"

export const Container = styled.div`
    width: 600px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 5px;
    .horario-disponivel{
        margin: 1px ;
        width: 24%;
        height: 30px ;
        border-radius: 4px ;
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