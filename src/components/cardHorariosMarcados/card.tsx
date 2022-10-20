import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Cartao } from './styles';

interface tipoDeDados {
    cliente: string;
    funcionario: string;
    tratamento: string;
    telefone: string;
    horario: string;
    data: string;
}

function Card({ cliente, funcionario, tratamento, telefone, horario, data }: tipoDeDados) {
    let linkTelefone = "https://api.whatsapp.com/send/?phone=+55" + telefone + "&text=oi";
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
                            <span><img src="../../icons/lapis.png"></img></span>
                        </li>
                        <li>funcionario: {funcionario}</li>
                        <li>tratamento: {tratamento}</li>
                        <li>
                            <a href={linkTelefone}>
                                telefone: {telefone}
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </a>
                        </li>

                    </ul>
                    <div className='confirmar-desmarcar' >
                        <div className='confirmar'>CONFIRMAR</div>
                        <div className='desmarcar'>DESMARCAR</div>
                    </div>
                </div>
            </Cartao>
        </>
    );

}

export default Card;