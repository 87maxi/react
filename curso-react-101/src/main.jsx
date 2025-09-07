import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import{ QueryClientProvider, QueryClient } from "react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Likes from './componentes/Likes.jsx';
import HooksCustom from './componentes/HooksCustom.jsx';
import Post from './componentes/Post.jsx';
import Login from './componentes/Login.jsx';
import Lista from './componentes/Lista.jsx';

const lista = [ "valencia", "alicante", "madrid" ]

createRoot(document.getElementById("root")).render(
    <StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
            
                        <Route index element={<div> Home </div>} />
                        <Route path="/likes" element={<Likes />} />
                        <Route path="/hooks" element={<HooksCustom />} />
                        <Route path="/post" element={<Post numero={1} />} />
                        <Route path="/login" element={<Login sesion={{usuario: "maxi", usuario2: ""}} />} />
                        <Route path="/lista" element={<Lista a={lista} />} />

                        <Route path="*" element={<div>404 NOT FOUND</div>} />
                    </Route>
                </Routes>
            </BrowserRouter>
    </StrictMode>

);