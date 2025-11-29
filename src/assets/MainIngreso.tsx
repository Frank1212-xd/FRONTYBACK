import { Link } from "react-router-dom"; 
const MainIngreso = () => { 
  return ( 
    <form className="d-flex justify-content-center gap-2"> 
      <Link to="/Login" className="btn btn-dark w-45"> 
        Ingresar a tu cuenta 
      </Link> 
      <Link to="/Register" className="btn btn-dark w-45"> 
        Registrar nueva cuenta 
      </Link> 
    </form> 
  ); 
}; 
export default MainIngreso 
