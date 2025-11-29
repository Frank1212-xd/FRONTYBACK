import Imagen from "./imagen" 
import MainIngreso from "./MainIngreso" 
import MainLinks from "./MainLinks" 
import Titulo from "./Titulo" 
 
const MainPage = () => 
{ 
    return <div className = "row"> 
        <div className = "col"></div> 
        <div className = "col">  
            <Titulo texto = "Proyecto Programacion Web"/> 
            <Imagen/> 
            <MainIngreso/> 
            <MainLinks/> 
        </div> 
        <div className = "col"></div> 
    </div> 
 
} 
 
export default MainPage 
