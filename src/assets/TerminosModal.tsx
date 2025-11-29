import React, { useState } from 'react';
import './TerminosModal.css';
import { useNavigate } from   'react-router-dom';

	const TerminosModal: React.FC = () => {
    const navigate = useNavigate();
	  const [mostrarModal, setMostrarModal] = useState(false);
	
	  const abrirModal = () => setMostrarModal(true);	  

    const cerrarModal = () => {setMostrarModal(false);
    navigate('/');};
	
	  return (
	    <>
	      <footer className="text-center vh-100 d-flex flex-column justify-content-center align-items-center">
          <button style={{ backgroundColor: "white", padding: "10px 20px", borderRadius: "5px", textDecoration: "none", gap: "10px", marginTop: "20px", textAlign: 'center', alignContent: 'center'}} onClick={abrirModal}>Terminos y Condiciones</button>
         {mostrarModal && (
	        <div className="modal">	          
          <div className="modal-contenido">
	            <h2>Términos y Condiciones</h2>
	            <p>
	              Este documento contiene las políticas de uso de la plataforma. Al utilizar nuestros servicios,
	              aceptas los términos aquí descritos. Por favor, revisa cuidadosamente cada sección.
	            </p>
	            <img
	              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7PeoRKTf31s-ymavJDHvOWl9FKybE7Gbikw&s"
	              alt="Imagen ilustrativa de términos" 
	             />
	            <button className= "boton" onClick={cerrarModal}>
                Regresar
                </button>
	          </div>
	        </div>
	      )}
	      </footer>
	    </>
	  );	};	
export default TerminosModal;
