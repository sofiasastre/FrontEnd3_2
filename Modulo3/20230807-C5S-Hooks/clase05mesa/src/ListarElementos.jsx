function ListarElementos ({elementos}){

    return(
        <div>
            <h2>Lista de Elementos</h2>
            <ul>
                {elementos.map((elemento, index)=>(
                    <li key={index}>{elemento}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListarElementos;