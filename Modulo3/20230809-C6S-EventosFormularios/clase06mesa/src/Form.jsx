import { useState } from "react";
import Info from "./Info.jsx";

function Form() {
  // const [nombre, setNombre]=useState("");
  // const [edad, setEdad]=useState("");
  // const [pokemon, setPokemon]=useState("");
  const [usuarios, setUsuarios] = useState([]);

  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: "",
    edad: "",
    pokemon: "",
  });

  function handleNombre(e) {
    setNuevoUsuario((prevUsuario) => ({
      ...prevUsuario,
      nombre: e.target.value,
    }));
  }

  function handleEdad(e) {
    setNuevoUsuario((prevUsuario) => ({
      ...prevUsuario,
      edad: e.target.value,
    }));
  }

  function handlePokemon(e) {
    setNuevoUsuario((prevUsuario) => ({
      ...prevUsuario,
      pokemon: e.target.value,
    }));
  }

  function miEvento() {
    alert("Datos Enviados");
  }

  function registrar(e) {
    e.preventDefault();
    miEvento();
    setUsuarios((prevUsuarios) => [...prevUsuarios, nuevoUsuario]);
    setNuevoUsuario({
      nombre: "",
      edad: "",
      pokemon: "",
    });
  }

  function borrar() {
    setUsuarios([]);
  }

  return (
    <div>
      <h2>Registro de Usuarios</h2>
      <form onSubmit={registrar}>
        <div>
          <input
            type="text"
            placeholder="Nombre completo"
            onChange={handleNombre}
          />
        </div>

        <div>
          <input type="text" placeholder="Edad" onChange={handleEdad} />
        </div>

        <div>
          <input
            type="text"
            placeholder="Pokemon Favorito"
            onChange={handlePokemon}
          />
        </div>

        <div className="registro">
          <input type="submit" value="Registrarse" />
        </div>
      </form>

      <div>
        <h3>Lista de Usuarios</h3>

        <ul>
          {usuarios.map((usuario, index) => (
            <li key={index}>
              <Info datos={usuario} />
            </li>
          ))}
        </ul>
      </div>

      <button onClick={borrar}>Borrar lista</button>
    </div>
  );
}

export default Form;
