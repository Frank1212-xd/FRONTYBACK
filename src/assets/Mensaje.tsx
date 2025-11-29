const Mensaje = (props : MensajeProps) => 
{ 
    return <div className="mt-3">    
    { 
        props.resultadoLogin ? 
        <div className="alert alert-success "> 
            Login Exitoso 
        </div> : 
        <div className="alert alert-danger"> 
            Login Fallido: Usuario o Contraseña Incorrecta 
        </div> 
    }  
 
    </div> 
} 
 
interface MensajeProps 
{ 
    resultadoLogin : boolean 
} 
export default Mensaje 
