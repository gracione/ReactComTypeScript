import styled from "styled-components"

export const Cartao = styled.div`
    width:350px;
    height:120px;
    margin: 20px ;
    background:white;
    border-left:solid 10px var(--blue-light);
    border-radius:5px;
    text-transform: capitalize;

    display:flex;
    justify-content: space-between;
    font-size: 13px ;
    font-weight: 380;

    .dados-horario{
        width:40%;
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        .horario{
            font-size:45px;
            font-weight:540;
            color:var(--blue-light);
            display:flex;
            justify-content: center;
            align-items:center;
    
        }
        .data{
    
            display:flex;
            justify-content: center;
            align-items:center;
    
        }
    }
    .dados-usuario{
        width:60%;
        .cliente{
        font-size: 15px !important ;
        color: var(--blue);
    }
    ul{
        padding: 0;
        margin: 0;
        height: 70% ;

        display: flex;
        flex-direction: column;
        justify-content: space-around ;
        li{
            display: block ;
            img{
                background-color: var(--blue) ;
                border-radius: 4px;
                width: 25px;
                height: 25px;
                padding: 4px;
                float: right;
                margin-right: 4px;
                position: absolute ;
        }

        }    
    }
    .confirmar-desmarcar{
        height:30%;
        background-color: yellow;
        text-align:center;
        font-size:13px !important;
        font-weight:700 !important;
        
        display:flex;
        .confirmar{
            width:50%;
            background:var(--blue-light);
    
            display:flex;
            flex-direction: column;
            justify-content: center;
        }
        .desmarcar{
            width:50%;
            background:var(--red-light);
    
            display:flex;
            flex-direction: column;
            justify-content: center;
        }
    }
    }
    `;