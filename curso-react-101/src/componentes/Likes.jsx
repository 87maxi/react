import { useState } from "react";
function Likes() {

    const [likes, setLikes ] = useState(0); // use* este prefijo indica que es un hook // por recomendacion usar el estado en caso extrictamente necesario
    
    const increment= () =>{
        setLikes(likes +1)
        // muestra desde la primera ejecucion de la funcion que es la del renderizado de la pagina
        console.log("render", likes)
         
    }

    // esta opcion es valida solo en el caso de no necesitar parametros
    // <button onClick={increment} > Likes {likes} </button>
    return <button onClick={() => increment()} > Likes {likes} </button>


}


export default Likes