import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './CerrarSesion.css'; 

const StreamerPage = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const navigate = useNavigate();

  const cerrarSesion = () => {
    try {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      sessionStorage.clear();
      navigate('/');
    } catch (error) {
      console.error('Error al cerrar sesión', error);
    }
  };

  return (
    <div className="text-center vh-100 d-flex flex-column justify-content-center align-items-center">
      <Link to="/Regalos" className="btn btn-link text-white" style={{ backgroundColor: "purple", padding: "10px 20px", borderRadius: "5px", textDecoration: "none" }}>
        Regalos
      </Link>

      <button
        className="btn btn-link text-white"
        style={{ backgroundColor: "black", padding: "10px 20px", borderRadius: "5px", textDecoration: "none", gap: "10px", marginTop: "20px" }}
        onClick={() => setMostrarModal(true)}
      >
        Cerrar sesión
      </button>

      {mostrarModal && (
        <div className="cs-overlay" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) setMostrarModal(false); }}>
          <div
            className="cs-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cs-title"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="cs-title">Confirmar cierre de sesión</h2>
            <p>¿Estás seguro que quieres cerrar sesión? Se finalizará tu sesión actual y volverás a la página principal.</p>
            <div className="cs-actions">
              <button className="cs-btn cs-no" onClick={() => setMostrarModal(false)} autoFocus>
                No
              </button>
              <button className="cs-btn cs-si" onClick={cerrarSesion}>
                Sí, cerrar sesión
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StreamerPage;
