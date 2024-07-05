import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nofound from "./pages/Nofound";
import Navegar from "./pages/navegar";
import ContenedorComponentes from "./pages/contenerdorComponentes";

const App = ()=>(
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<Nofound/>}></Route>
            <Route path="/cartas" element={<Navegar/>}></Route>
            <Route path="/lista" element={<ContenedorComponentes/>}></Route>
        </Routes>
    </BrowserRouter>
)

export default App