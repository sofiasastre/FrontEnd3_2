import { Button } from "./Button";
import "./styles.css";

const disciplinas = [
  "Banco de Dados",
  "Frontend",
  "Backend",
  "Metodologias Ágeis",
  "Infraestrutura"
];

export default function App() {
  return (
    <div className="container">
      <h1 className="title">Disciplinas</h1>

      <p className="paragraph">
        Aqui estão listadas as disciplinas disponíveis para o semestre
      </p>

      <ul className="list">
        {disciplinas.map((item) => (
          <li className="item" key={item}>
            {item}
          </li>
        ))}
      </ul>

      <Button />
    </div>
  );
}
