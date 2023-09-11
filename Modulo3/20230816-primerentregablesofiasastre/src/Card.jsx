import React from "react";

function Card({ datos }) {
  return (
    <div className="card">
      {datos.map((dato, index) => (
        <div key={index} className="card">
          <h3>Tu nombre:  {dato.nombre}</h3>
          <h3>Titulo de la canción: {dato.cancion}</h3>
          <h3>Autor de la canción: {dato.autor}</h3>
          <h3>Frase: {dato.frase}</h3>
          
        </div>
      ))}
    </div>
  );
}

export default Card;
