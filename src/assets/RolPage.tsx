import { Link } from "react-router-dom"; 
 
const RolPage = () => { 
  return ( 
    <div className="text-center vh-100 d-flex flex-column justify-content-center align-items-center"> 
      <h2>¿Con qué rol desea ingresar?</h2> 
 
      <div className="mt-4"> 
        <Link to="/Streamer" className="btn btn-primary me-3"> 
          Streamer 
        </Link> 
        <Link to="/PaginaEspec" className="btn btn-secondary"> 
          Espectador 
        </Link> 
      </div> 
    </div> 
  ); 
}; 
 
export default RolPage; 
 
