import React from "react";
import Wuenas from "./wuenas";
import { useNavigate } from "react-router-dom";

const Navegar=()=>{
    const navigate=useNavigate()
    return <Wuenas navigate={navigate}/>
}
export default Navegar