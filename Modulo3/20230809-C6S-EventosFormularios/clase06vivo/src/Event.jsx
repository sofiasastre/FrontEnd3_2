import React, {useState} from 'react';

function Event({ numero }) {
    const [clickCount, setClickCount] = useState(0);
  
    function miEvento() {
      console.log("Activado Nº " + numero);
      setClickCount(clickCount + 1);
    }
  
    return (
      <div>
        <p>Click para lanzar un evento</p>
        <p>Clicks en el botón {numero}: {clickCount}</p>
        <button onClick={miEvento}>Activar</button>
      </div>
    );
  }
  
  export default Event;