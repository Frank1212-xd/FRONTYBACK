import { useState, type ChangeEvent } from "react" 
 
const Formulario = (props : FormularioProps) => { 
    const [username, setUsername] =useState<string>("") 
    const [password, setPassword] = useState<string>("") 
const handleUsernameOnChange = (e : ChangeEvent<HTMLInputElement>) => 
{ 
    setUsername(e.currentTarget.value) 
} 
 
const handlePasswordOnChange = (e : ChangeEvent<HTMLInputElement>) => 
{ 
    setPassword(e.currentTarget.value) 
} 
const butOnClick =() => 
{ 
    props.onLogin(username, password) 
} 
 
 return <form> 
                    <input className="form-control mb-2" value = {username} onChange={handleUsernameOnChange} type="text" placeholder="Nombre de Usuario" /> 
                    <input className="form-control mb-2" value = {password} onChange={handlePasswordOnChange} type="password" placeholder="Contraseña"/> 
                    <button className = "btn btn-dark w-45 me-1" type="button" onClick={butOnClick}> 
                        Ingresar 
                    </button> 
                </form> 
} 
 
interface FormularioProps 
{ 
    onLogin : (username : string, password : string) =>void 
} 
export default Formulario 
