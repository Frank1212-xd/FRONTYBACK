const RegaloPage = () => {
  return (
    <div className="container py-4">
      <h2>Gestión de Regalos</h2>
      
      <form>
        <input type="text" className="form-control mb-2" placeholder="Nombre del regalo"/>
        <input type="number" className="form-control mb-2" placeholder="Costo" min="0"/>
        <input type="number"  className="form-control mb-2" placeholder="Puntos" min="0"/>
        <button type="button" className="btn btn-primary">Agregar Regalo</button>
      </form>
      <ul className="list-group mt-3">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <strong>Regalo de ejemplo</strong> - Costo: 100 - Puntos: 50
          </div>
          <div>
            <button className="btn btn-sm btn-warning me-2">Editar</button>
            <button className="btn btn-sm btn-danger">Eliminar</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RegaloPage;