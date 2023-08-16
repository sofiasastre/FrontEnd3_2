function Hijo({ lista, setLista }) {
  return (
    <div>
      <button onClick={() => setLista([...lista, lista.length + 1])}>
        Añadir Item
      </button>

      <button onClick={() => setLista([])}>Reset</button>
    </div>
  );
}

export default Hijo;
