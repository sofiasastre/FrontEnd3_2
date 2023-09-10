import './App.css'
function Hijo(props){
    return(
        <div className='card'>
            <h2> Producto: {props.nombre}</h2>
            <h3>Precio: {props.precio}</h3>
        </div>
    )
}
export default Hijo;