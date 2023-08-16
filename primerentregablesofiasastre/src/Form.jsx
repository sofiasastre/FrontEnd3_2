import { useState } from "react";

function Form({ onAddDatos }) {
  const [nombre, setNombre] = useState("");
  const [cancion, setCancion] = useState("");
  const [autor, setAutor] = useState("");
  const [frase, setFrase] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNombreValido = nombreValido(nombre);
    const isTituloValido = largoTitulo(cancion);

    console.log(nombre);
    console.log(cancion);
    console.log(autor);
    console.log(frase);
    if (
      nombre &&
      cancion &&
      autor &&
      frase &&
      isNombreValido &&
      isTituloValido
    ) {
      onAddDatos({ nombre, cancion, autor, frase });
      setNombre("");
      setCancion("");
      setAutor("");
      setFrase("");
    } else {
      alert("Por favor chequea que la información sea correcta");
    }
  };
  const nombreValido = (nombre) => {
    //const nombreSinEspacios = nombre.trim();
    if (nombre.length < 3 || nombre.startsWith(" ")) {
      return false;
    } else {
      return true;
    }
  };

  const largoTitulo = (cancion) => {
    if (cancion.length < 6) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingrese el titulo canción favorita"
          value={cancion}
          onChange={(e) => setCancion(e.target.value)}
        />
        <input
          type="text"
          placeholder="¿Quien es el autor?"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />
        <textarea
          rows="4"
          cols="50"
          value={frase}
          onChange={(e) => setFrase(e.target.value)}
          placeholder="¿Cuál es la mejor frase de la canción?"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Form;
