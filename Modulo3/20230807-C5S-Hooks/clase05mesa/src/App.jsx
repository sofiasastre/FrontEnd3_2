import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListarElementos from './ListarElementos'

function App() {
  const [elementos, setElementos] = useState([]);

  function agregarElemento() {
    const nuevoElemento = `El punto ${elementos.length + 1} se ha añadido a la lista`;
    setElementos([...elementos, nuevoElemento]);
  }

  function reiniciarLista(){
    setElementos([]);
  }
  

  return (
    <div>
      <h1>Actividad de Lista Dinámica</h1>
      <button onClick={agregarElemento}>Agregar Elemento</button>
      <button onClick={reiniciarLista}> Reinciar Lista </button>
      <ul>
        {elementos.map((elemento, index) => (
          <li key={index}>{elemento}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
