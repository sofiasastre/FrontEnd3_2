function Info({ datos }) {
  return (
    <div>
      <p>
        {datos.nombre} tiene {datos.edad} años y su pokemon favorito es{" "}
        {datos.pokemon}
      </p>
    </div>
  );
}

export default Info;
