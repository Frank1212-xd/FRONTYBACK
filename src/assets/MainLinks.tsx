import { useState } from "react";
import { Link } from "react-router-dom";
import './TerminosModal.css';

const MainLinks = () => {
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = () => setMostrarModal(true);
  const cerrarModal = () => setMostrarModal(false);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-3">
      <p
        className="terminos-link"
        onClick={abrirModal}
      >
        Términos y Condiciones
      </p>

      {mostrarModal && (
        <div className="modal-overlay" onMouseDown={(e) => {
          if (e.target === e.currentTarget) cerrarModal();
        }}>
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <h2>Términos y Condiciones</h2>
            <p>
              Este documento contiene las políticas de uso de la plataforma. Al utilizar nuestros servicios,
              aceptas los términos aquí descritos. Por favor, revisa cuidadosamente cada sección.
            </p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7PeoRKTf31s-ymavJDHvOWl9FKybE7Gbikw&s"
              alt="Imagen ilustrativa de términos"
              className="modal-img"
            />
            <div className="modal-footer">
              <button className="modal-btn" onClick={cerrarModal}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      <Link to="#" className="btn btn-link">Nosotros</Link>
    </div>
  );
};

export default MainLinks;