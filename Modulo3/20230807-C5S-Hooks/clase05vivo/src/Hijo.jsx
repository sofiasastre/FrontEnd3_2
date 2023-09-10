function Hijo({count,setCount}) {
    return (
        <div>
            <h2>El contador está en: {count}</h2>
            <button onClick={()=> setCount((count) => count+1)}>Incrementar</button>
            <button onClick={()=> setCount(0)}>Reset</button>
        </div>
     );
}

export default Hijo;