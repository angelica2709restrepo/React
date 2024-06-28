import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nofound from "./pages/Nofound";
import Navegar from "./pages/navegar";
import ContenedorComponentes from "./pages/contenerdorComponentes";

const App = ()=>(
    <BrowserRouter>
        <Routes>
            <Route exact path="/*" component={<Nofound/>}></Route>
            <Route exact path="/cartas" element={<Navegar/>}></Route>
            <Route exact path="/lista" element={<ContenedorComponentes/>}></Route>
        </Routes>
    </BrowserRouter>
)

export default App