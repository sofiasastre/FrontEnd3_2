import { useState } from "react";
import "./App.css"
import Form from "./Form";
import Card from "./Card";

function App() {
  const [datos, setDatos] = useState([]);

  const addDatos = (dato) => {
    setDatos([...datos, dato]);
    console.log(datos);
  };

  return (
    <div className="App">
      <h1>Registro de canción</h1>
      <Form onAddDatos={addDatos} />
      <Card datos={datos} />
    </div>
  );
}

export default App;
