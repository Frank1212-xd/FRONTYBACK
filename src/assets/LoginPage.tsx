import { useState } from "react"; 
import SeccionCentral from "./SeccionCentral"; 
import { Link, useNavigate } from "react-router-dom"; 
 
const LoginPage = () => { 
  const [resultadoLogin, setResultadoLogin] = useState<boolean | undefined>(undefined); 
  const navigate = useNavigate(); 
 
  const Login = (username: string, password: string) => { 
    const dataRegistro = localStorage.getItem("REGISTRO_USUARIO"); 
 
    if (dataRegistro !== null) { 
      const usuarioRegistrado = JSON.parse(dataRegistro); 
 
      if (usuarioRegistrado.username === username && usuarioRegistrado.password === password)  
      { 
        console.log("Login exitoso"); 
        setResultadoLogin(true); 
        navigate("/Roles"); 
 
        const dataUsuario = localStorage.getItem("USER"); 
        if (dataUsuario == null)  
        { 
          const Usuario = { 
            username: username, 
            cantidadIntentos: 1 
          }; 
     
          localStorage.setItem("USER", JSON.stringify(Usuario)); 
        }  
        else  
        { 
          const Usuario = JSON.parse(dataUsuario); 
          Usuario.username = username; 
          Usuario.cantidadIntentos += 1; 
          localStorage.setItem("USER", JSON.stringify(Usuario)); 
        } 
        }  
        else  
        { 
        console.log("Login fallido"); 
        setResultadoLogin(false); 
        const dataUsuario = localStorage.getItem("USER"); 
         if (dataUsuario == null)  
        { 
        const Usuario =  
        { 
            username: username, 
            cantidadIntentos: 1 
        }; 
     
        localStorage.setItem("USER", JSON.stringify(Usuario)); 
        }  
        else  
        { 
          const Usuario = JSON.parse(dataUsuario); 
          Usuario.username = username; 
          Usuario.cantidadIntentos += 1; 
          localStorage.setItem("USER", JSON.stringify(Usuario)); 
        } 
      } 
    }  
    else  
    { 
      console.log("No hay usuario registrado aún."); 
      setResultadoLogin(false); 
    } 
  }; 
 
  return ( 
    <div className="row"> 
      <div className="col"></div> 
      <div className="col"> 
        <SeccionCentral onLogin={Login} resultadoLogin={resultadoLogin} /> 
        <Link to="/">Regresar a la página principal</Link> 
      </div> 
      <div className="col"></div> 
    </div> 
  ); 
}; 
 
export default LoginPage; 
