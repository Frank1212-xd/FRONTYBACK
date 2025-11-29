import { useState } from "react"; 
import type { ChangeEvent } from "react"; 
 
const FormularioRegister = () => { 
  const [username, setUsername] = useState<string>(""); 
  const [correo, setCorreo] = useState<string>(""); 
  const [password, setPassword] = useState<string>(""); 
 
  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => { 
    setUsername(e.currentTarget.value); 
  }; 
 
  const handleCorreoChange = (e: ChangeEvent<HTMLInputElement>) => { 
    setCorreo(e.currentTarget.value); 
  }; 
 
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => { 
    setPassword(e.currentTarget.value); 
  }; 
 
  const handleRegisterClick = () => { 
    const nuevoUsuario = { 
      username, 
      correo, 
      password, 
    }; 
    localStorage.setItem("REGISTRO_USUARIO", JSON.stringify(nuevoUsuario)); 
    alert("Usuario registrado con éxito."); 
  }; 
 
  return ( 
    <form> 
      <input className="form-control mb-2" type="text" placeholder="Nombre de Usuario" value={username} onChange={handleUsernameChange}/> 
      <input className="form-control mb-2" type="email" placeholder="Correo electrónico" value={correo} onChange={handleCorreoChange}/> 
      <input className="form-control mb-3" type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange}/> 
      <button className="btn btn-dark w-45 me-1" type="button" onClick={handleRegisterClick}> Registrarse </button> 
    </form> 
  ); 
}; 
 
export default FormularioRegister; 
