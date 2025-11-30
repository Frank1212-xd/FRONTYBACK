import { useState } from "react";
import SeccionCentral from "./SeccionCentral";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [resultadoLogin, setResultadoLogin] = useState<boolean | undefined>(undefined);
  const navigate = useNavigate();

  // funcion asyncrona
  const Login = async (username: string, password: string) => {
    
    try {
      console.log("Enviando datos al servidor...", { username, password });

      // 1. Petición real a tu Backend
      const respuesta = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await respuesta.json();

      if (data.success) {
        // --- ÉXITO ---
        console.log("Login exitoso:", data);
        setResultadoLogin(true);

        // Guardamos el token real que nos dio el servidor
        localStorage.setItem("authToken", data.token);
        // Guardamos los datos del usuario
        localStorage.setItem("user", JSON.stringify(data.user));
        // Redirigir a la página de roles
        navigate("/Roles");
      } else {
        // --- error en la parte de la validacion de las credenciales
        console.warn("Error de login:", data.message);
        setResultadoLogin(false);
        alert(data.message); // Muestra "Usuario o contraseña incorrectos"
      }

    } catch (error) {
      // error a la hora de conectarse
      console.error(" Error conectando al servidor:", error);
      setResultadoLogin(false);
      alert("No se pudo conectar con el servidor");
    }
  };
  return (
    <div className="row">
      <div className="col"></div>
      <div className="col">
        {/* Pasamos la nueva función Login al componente */}
        <SeccionCentral onLogin={Login} resultadoLogin={resultadoLogin} />
        <Link to="/">Regresar a la página principal</Link>
      </div>
      <div className="col"></div>
    </div>
  );
};

export default LoginPage;