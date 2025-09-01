import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  {Home} from './componentes/Home';
import {Producto} from './componentes/Producto'
import { QueryClient, QueryClientProvider } from 'react-query';
import { Balance }  from './componentes/Balance';


const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>} >
            <Route path='/productos' element={<Producto></Producto>} />
            <Route path='/balance' element={<Balance></Balance>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
)
