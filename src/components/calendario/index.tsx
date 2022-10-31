import { Container } from "./styles";
import BuscarDadosApi from "../../util/util";

function organizarSemana(diaSemana: any, props: any,folga: any) {
  let semana: any = [];

  diaSemana.forEach((element: string) => {
    let className = "dia";
    if (props.dia == element) {
      className = "dia selecionado";
    }

    if (element != 'x') {
      if(folga) {
        semana.push(
          <div className="dia" >
            folga
          </div>
        );
      } else {
        semana.push(
          <div
            className={className}
            onClick={
              () => props.setDia(element)
            }
          >
            {element}
          </div>
        );
      }
    }
    else {
      semana.push(
        <div className="dia" >
          {element}
        </div>
      );
    }

  });

  return semana;
}

export default function Calendario(props: any) {

  let dados: any = {
    idFuncionario: 1
  }
  const folgaFuncionario = BuscarDadosApi('folga', 'listarById', dados);


  let calendario: any = [];
  let folga = false;
  for (let index = 0; index <= 6; index++) {
    folga = false;
    // eslint-disable-next-line no-loop-func
    folgaFuncionario.forEach((element):any => {
      // eslint-disable-next-line eqeqeq
      if(index == element.dia_semana) {
        folga = true
      }
    });
    calendario.push(
      <ul>
        {organizarSemana(props.dias[index], props, folga)}
      </ul>
    )
  }

  return (
    <Container>
      <ul className="diasSemana" >
        <li>Dom</li>
        <li>Seg</li>
        <li>Ter</li>
        <li>Qua</li>
        <li>Qui</li>
        <li>Sex</li>
        <li>Sab</li>
      </ul>
      <div className="mes" >
        {calendario}
      </div>
    </Container>
  );

}
