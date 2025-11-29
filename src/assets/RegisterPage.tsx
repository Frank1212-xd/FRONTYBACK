import { Link} from "react-router-dom"; 
import Imagen from "./imagen"; 
import FormularioRegister from "./FormularioRegister"; 
import Titulo from "./Titulo"; 
 
const RegisterPage = () => { 
return ( 
  <div className="row vh-100 d-flex align-items-center"> 
    <div className="col"></div> 
    <div className="col"> 
      <Titulo texto = "Registrar Cuenta"/> 
      <Imagen/> 
    <FormularioRegister/> 
      <Link to="/" className="mt-3"> Regresar a la página principal</Link> 
    </div> 
    <div className="col"></div> 
  </div> 
); 
 
}; 
 
export default RegisterPage; 
