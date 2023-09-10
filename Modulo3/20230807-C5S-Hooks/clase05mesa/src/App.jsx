import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Item from "./components/Item";

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <button onClick={()=>setItems((oldItemsArray)=>[...oldItemsArray,`El item ${oldItemsArray.length + 1} fue agregado a la lista`])}>
        Click para agregar item
      </button>
      <button onClick={()=>setItems([])}>Resetear</button>
      <br />
      <h1>Items de la lista</h1>
      <div>
        {items.map((element, index) => (
          <Item key={index} descripcion={element} />
        ))}
      </div>
    </div>
  );
}

export default App;
