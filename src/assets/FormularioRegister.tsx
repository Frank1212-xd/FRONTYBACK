import { useState } from "react"; 
import type { ChangeEvent } from "react"; 
import { useNavigate } from "react-router-dom"; // Para redirigir al login al terminar

const FormularioRegister = () => { 
  const [username, setUsername] = useState<string>(""); 
  const [correo, setCorreo] = useState<string>(""); 
  const [password, setPassword] = useState<string>(""); 
  const navigate = useNavigate();

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.currentTarget.value); 
  const handleCorreoChange = (e: ChangeEvent<HTMLInputElement>) => setCorreo(e.currentTarget.value); 
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value); 
 
  // --- FUNCIÓN ACTUALIZADA ---
  const handleRegisterClick = async () => { 
    
    try {
        const respuesta = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, correo, password })
        });

        const data = await respuesta.json();

        if (data.success) {
            alert("Usuario registrado con éxito. Ahora inicia sesión.");
            navigate("/Login"); // Te llevamos al login automáticamente
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Error de conexión con el servidor");
    }
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