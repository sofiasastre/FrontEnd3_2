import Hijo from "./Hijo";

const frutas = ["anana", "banana", "pera", "manzana","naranja"];
const titulo = "Listado de Frutas";

const Padre = () => {
    const hijos = () =>
    frutas.map((fruta, index) => <Hijo key={index} fruta={fruta}/>);
    return(
        <>
            <h1>{titulo}</h1>
            <ul>{hijos()}</ul>
        </>
    );
};

export default Padre;