import styled from "styled-components"

export const Container = styled.div`
    width:500px;
    background:white;
    .selecionado{
        background-color: red ;
    }
    .dia{
        border: solid 1px;
        height: 45px;
        list-style-type: none;
        display: flex ;
        justify-content: center ;
        align-items: center ;
    }
    .diasSemana{
        display: flex ;
        li{
            border: solid 1px;
            width: 15%;
            height: 20px;
            list-style-type: none;

            display: flex ;
            justify-content: center ;
            align-items: center ;
        }
    }
    .mes{
        display: flex ;
        justify-content: space-between ;
        ul{
            width: 15%;
        }
    }
    `;

