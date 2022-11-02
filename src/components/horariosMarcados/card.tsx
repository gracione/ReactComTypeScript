import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Cartao } from './styles';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

interface tipoDeDados {
    idHorario: string;
    cliente: string;
    funcionario: string;
    tratamento: string;
    telefone: string;
    horario: string;
    data: string;
}

function Card({ idHorario, cliente, funcionario, tratamento, telefone, horario, data }: tipoDeDados) {
    let linkTelefone = "https://api.whatsapp.com/send/?phone=+55" + telefone + "&text=oi";
    const history = useNavigate();
    function desmarcarHorario(idHorario: any) {
        api.post("/horario/excluir", {
            id: idHorario
        })
        history('/home?desmarcado');
    }
    return (
        <>
            <Cartao>
                <div className='dados-horario'>
                    <div className="horario" >
                        {horario}
                    </div>
                    <div className="data" >
                        {data}
                    </div>
                </div>
                <div className='dados-usuario' >
                    <ul>
                        <li className="cliente" >
                            cliente: {cliente}
                            <span>
                                <img src="../../icons/lapis.png"></img>
                            </span>
                        </li>
                        <li>Funcionario: {funcionario}</li>
                        <li>Tratamento: {tratamento}</li>
                        <li>
                            <a href={linkTelefone}>
                                telefone: {telefone}
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </a>
                        </li>

                    </ul>
                    <div className='confirmar-desmarcar' >
                        <div className='confirmar'>CONFIRMAR</div>
                        <div className='desmarcar' onClick={() => desmarcarHorario(idHorario)} >DESMARCAR</div>
                    </div>
                </div>
            </Cartao>
        </>
    );

}

export default Card;