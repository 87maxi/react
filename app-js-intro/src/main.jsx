import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Home} from './componentes/Home'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>{/* desactualizado  */ }
          {/* Ruta index = / */}
          <Route index element={<p>Inicio</p>} />
          {/* Ejemplo de subrutas = /productos y /clientes */}
          <Route path="productos" element={<p>Productos</p>} />
          <Route path="clientes" element={<p>Clientes</p>} />
          
        </Route>
        <Route path='empresa' element={<p>prueba empresa</p>}  />
        <Route path='*' element={<p>ruta erronea</p>}  /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
