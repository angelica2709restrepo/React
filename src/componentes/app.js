import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nofound from "./pages/Nofound";
import Maestro from "./pages/maestro";
import Navegar from "./pages/navegar";

const App = ()=>(
    <BrowserRouter>
            <Routes>
                <Route exact path="/*" element={<Nofound/>}></Route>
                <Route exact path="/" Component={Navegar}></Route>
                <Route exact path="/cartas" element={<Maestro/>}></Route>
            </Routes>
        </BrowserRouter>
)

export default App