import Formulario from "./Formulario" 
import Imagen from "./imagen" 
import Mensaje from "./Mensaje" 
import Titulo from "./Titulo" 
 
const SeccionCentral = (props: SeccionCentralProps) => 
{ 
 return  <div> 
                <Titulo texto = "Login"/> 
                <Imagen/> 
                <Formulario onLogin={props.onLogin}/> 
                { 
                    props.resultadoLogin != undefined ? 
                        <Mensaje resultadoLogin = {props.resultadoLogin}/> : 
                        "" 
                } 
                 
            </div> 
} 
interface SeccionCentralProps 
{ 
    onLogin : (username : string, password : string) =>void 
    resultadoLogin? : boolean 
} 
export default SeccionCentral 
