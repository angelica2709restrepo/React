import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nofound from "./pages/Nofound";
import Navegar from "./pages/navegar";
import ContenedorComponentes from "./pages/contenerdorComponentes";

const App = ()=>(
    <BrowserRouter>
        <Routes>
            <Route exact path="/*" element={<Nofound/>}></Route>
            <Route exact path="/cartas" Component={Navegar}></Route>
            <Route exact path="/" Component={ContenedorComponentes}></Route>
        </Routes>
    </BrowserRouter>
)

export default App