import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  Lista  from "./componentes/Lista";
import Login from "./componentes/Login";
import   Likes   from "./componentes/Likes"
import   Post   from "./componentes/Post"
import   HooksCustom   from "./componentes/HooksCustom"

const ftext= () => "todo"
const farr = () => [ 1, " todo ", ftext(), [1,2,4] ]
const C2 = (props) => { return <span> "este es el componente C2" { props.b } </span>  }
const C1 = (props) => { 
  return (  
      <div> 
        este es un componente   { props.a } "---" <C2 b="  ->>>>  text  " />
      </div>
    )
  }; 
const lista = [ "valencia", "alicante", "madrid" ]

const sesion = { usuario : "maxi", usuario2: null  }

createRoot(document.getElementById('root')).render(

  
    <StrictMode>
      <div>
        { 4+2 }
        <p>
        { ftext() }
        </p>
        <h2 > imprimir array literalmente </h2>
        <div><p>{farr()}</p></div>
        <h2>uso de componenetes</h2>
        <div> <C1 a={ 25 + 10 } /></div>
        <div> esto no se usa  { C1({a:33}) }</div>
        <br></br>
        <h2> Listado de elementos </h2>
        <div><Lista a={lista} /></div>
        <div>< Login sesion={sesion} /></div>
        <div><Likes/></div>

        <div><Post/></div>
        <div><HooksCustom/></div>



      </div>
    </StrictMode>
  
)
