import "./style.css";

const disciplinas = [
  "Banco de Dados",
  "Frontend",
  "Backend",
  "Metodologias Ágeis",
  "Infraestrutura"
];

export default function App() {
  return (
    <div className="App">
      <h1>Disciplinas</h1>

      {/*
          Primeiro mostrar sem a utilização do Map.
      */}

      <ul>
        <li>Banco de Dados</li>
        <li>Frontend</li>
        <li>Backend</li>
        <li>Metodologias Ágeis</li>
        <li>Infraestrutura</li>
      </ul>

      {/*
          Depois mostrar com a utilização do Map.
      */}

      <ul>
        {disciplinas.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
