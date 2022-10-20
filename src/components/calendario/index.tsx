import { Container } from "./styles";

function organizarSemana(diaSemana: any, props: any) {
  let semana: any = [];

  diaSemana.forEach((element: string) => {
    semana.push(<li
      className="dia"
      onClick={() => props.setDia(element)}
      >
        {element}</li>);
  });

  return semana;
}

export default function Calendario(props: any) {
  let domingo, segunda, terca, quarta, quinta, sexta, sabado: any;
  domingo = organizarSemana(props.dias[0], props);
  segunda = organizarSemana(props.dias[1], props);
  terca = organizarSemana(props.dias[2], props);
  quarta = organizarSemana(props.dias[3], props);
  quinta = organizarSemana(props.dias[4], props);
  sexta = organizarSemana(props.dias[5], props);
  sabado = organizarSemana(props.dias[6], props);

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
        <ul>
          {domingo}
        </ul>
        <ul>
          {segunda}
        </ul>
        <ul>
          {terca}
        </ul>
        <ul>
          {quarta}
        </ul>
        <ul>
          {quinta}
        </ul>
        <ul>
          {sexta}
        </ul>
        <ul>
          {sabado}
        </ul>
      </div>
    </Container>
  );

}
