import { useState } from "react"
function Form(){
    const [nombre,setNombre] = useState("");
    const [registrado, setRegistrado] = useState(false);

    function handleNombre(e){
        setNombre(e.target.value)
    }

    function registrar(e){
        e.preventDefault();
        console.log("Usuario Registrado");
        console.log("Nombre:", nombre);
        setRegistrado(true);
    }

    return(
        <div>
            <h2>Registro</h2>
            <form onSubmit={registrar}>
                <div>
                    <input type="text" placeholder="Ingrese su nombre" onChange={handleNombre} />
                </div>
                <div>
                    <input type="submit" value="Registrarse" />
                </div>
            </form>
            {registrado && <p>Usuario registrado con nombre: {nombre}</p>}
        </div>
    )
}
export default Form