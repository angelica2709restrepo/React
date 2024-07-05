import React from "react";
import { useNavigate } from "react-router-dom";
import Contenedor from "./contenedor";

const Navegar=()=>{
    const navigate=useNavigate();
    return <Contenedor navigate={navigate}/>
}
export default Navegar