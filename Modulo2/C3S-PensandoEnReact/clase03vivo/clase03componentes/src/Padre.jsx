import "./App.css";
import Hijo from "./Hijo";

function Padre(props){
    return(
        <div className="Padre">
            {props.children}
        </div>
        
        /*<div className="Padre">
             <Hijo nombre="Juan"/>
             <Hijo nombre="Laura"/>
             <Hijo nombre="Antonia"/>
         </div>
         */
        
    )
}

export default Padre;