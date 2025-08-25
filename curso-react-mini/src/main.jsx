import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  {Home} from './componentes/Home';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>} >
          <Route path='/productos' element={<h1>productos</h1>} />
          <Route path='/balance' element={<h1>balance</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
