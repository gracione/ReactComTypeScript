import { Container } from "./styles";
import BuscarDadosApi from "../../util/util";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

function organizarSemana(diaSemana: any, props: any, folga: any, feriados: any) {
  let semana: any = [];

  diaSemana.forEach((element: string) => {
    let className = props.dia == element ? "dia selecionado" : "dia";
    let verificarFeriado: any = false;
    let nomeFeriado: any = '';

    feriados.forEach((feriado: { dia: any; nome: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }): any => {
      // eslint-disable-next-line eqeqeq
      if (feriado.dia == element) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        verificarFeriado = true;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        nomeFeriado = feriado.nome;
      }
    });

    if (element != 'x') {
      if (folga) {
        semana.push(
          <div className="dia" >
            folga
          </div>
        );
      } else if (verificarFeriado) {
        semana.push(
          <div className="dia" >
            {nomeFeriado}
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
  let data: any = {
    mes: props.mes,
    ano: props.ano
  }
  let folgaFuncionario = BuscarDadosApi('folga', 'listarById', dados);
  let feriados = BuscarDadosApi('feriados', 'listarFeriadoPorMes', data);
  console.log(feriados);

  let calendario: any = [];
  let folga = false;
  for (let index = 0; index <= 6; index++) {
    folga = false;
    // eslint-disable-next-line no-loop-func
    folgaFuncionario.forEach((element): any => {
      // eslint-disable-next-line eqeqeq
      if (index == element.dia_semana) {
        folga = true
      }
    });
    calendario.push(
      <ul>
        {organizarSemana(props.dias[index], props, folga, feriados)}
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
