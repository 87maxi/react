import { useContext, useEffect } from "react"
// esto me resulto dificil de entender y no se si es la mejor manera 
import { GlobalContext  } from "../context/AppGlobal"
import AppGlobal from "../context/AppGlobal"


const Hijo = () => {
    const [context, setContext ] = useContext(GlobalContext)
    useEffect(() =>{
        console.log("Hijo")
      })
    
    return (<div>
        usuario: { context.usuario }
    </div>)

}
const Nieto = () => {
    const [context, setContext ] = useContext(GlobalContext)
    useEffect(() =>{
        console.log("nieto")
      })
    
    const cambiar = () => {
        setContext({ ...context, usuario: "Maximiliano" })
    }
    return (<div>
        <button onClick={ () => {cambiar()} }  > cambiar usuario</button>
        usuario: { context.usuario }
    </div>)
}




const HooksContext = () => {

    return (
        <AppGlobal>
            <h1>Hola </h1>
            <Nieto></Nieto>
            <Hijo></Hijo>
            
            
        </AppGlobal>
    )
}


export default HooksContext