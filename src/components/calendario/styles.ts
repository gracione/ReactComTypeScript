import styled from "styled-components"

export const Container = styled.div`
    width:600px;
    background:white;
    .diasSemana{
        display: flex ;
        li{
            border: solid 1px;
            width: 15%;
            height: 60px;
            list-style-type: none;

            display: flex ;
            justify-content: center ;
            align-items: center ;
        }
        .dia{
            &:active {
            opacity: 0.6;
        }
        }
    }
    .mes{
        display: flex ;
        justify-content: space-between ;
        ul{
            width: 15%;
            display: flex ;
            flex-direction: column ;
            
            li{
                border: solid 1px;
                height: 60px;
                list-style-type: none;
    
                display: flex ;
                justify-content: center ;
                align-items: center ;
            }
        }
    }
    `;