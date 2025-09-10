
import ReactDOM from "react-dom/client";
import Query from "./componets/react-query"
import Listado from "./componets/Listado";
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'

const root = document.getElementById("root") as HTMLElement



const Layout = () => {

  return <div>
      <h2>React type script</h2>
    <ul>
      <li>
          <Link to="query">React Query</Link>

      </li>
      <li>
          <Link to="listado">React Listado</Link>

      </li>
      <li>
          <Link to="/servicios">Servicios prueba</Link>
          
      </li>
      <li>
          <Link to="">Root</Link>
          
      </li>
    </ul>

    <div>
      <Outlet/>
    </div>
  </div>


} 


const Servicios = () => {
  return (
    <div>
      <p>Servicios de la empresa</p>
      <p>
        <Link to="ser1"> Servicio 1 </Link>
        <Link to="ser2"> Servicio 2 </Link>
        <Link to="ser3"> Servicio 3 </Link>
      </p>
      <Outlet></Outlet>
    </div>
  )
}



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/query"  element={<Query/>} ></Route>
            <Route path="/listado"  element={<Listado/>} ></Route>
            <Route path="/servicios" element={<Servicios></Servicios>}  >
              <Route index element="Servicio por defecto" ></Route>
              <Route path="ser1"  element="servicio 1" ></Route>
              <Route path="ser2"  element="servicio 2" ></Route>
              <Route path="ser3"  element="servicio 3" ></Route>
            
            </Route>
          </Route>
      </Routes>
    </BrowserRouter>
  )

  
}



ReactDOM.createRoot(root).render(
  <App />
)
