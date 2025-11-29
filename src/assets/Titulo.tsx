import { useState } from "react" 
import "./Titulo.css" 
 
const TituloOnClick = () => 
{ 
    console.log("Se hizo click") 
} 
 
const Titulo = (props: TituloProps) => 
    { 
        const [tamanoLetra] = useState<number>(3); 
         
    return  <h1 className = "titulo" onClick={TituloOnClick}     style= 
    { 
    { 
        fontSize : `${tamanoLetra}em`  
    } 
         
    }> 
 
    { 
        props.texto    
    } 
     </h1> 
} 
 
interface TituloProps{ 
    texto : string 
} 
export default Titulo 
