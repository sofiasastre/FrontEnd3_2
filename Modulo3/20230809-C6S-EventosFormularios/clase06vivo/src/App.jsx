import { useState } from "react";
import Form from "./Form";
import Event from "./Event";
import "./App.css";

function App() {
  return(
    <div className="App">
      <h2>Practicando Eventos y Formularios</h2>
      <Event />
      <Event numero="1"/>
      <Event numero="2"/>
      <Form/>
    </div>
  )
}

export default App;
