import React from "react";
import Saludo from "./saludo";
import Iterante from "./iterante";
import Boton from "./boton";


const Componentes=({data})=>(
    <div>
        <Saludo username = "Angelica"/>
        <Iterante chao={data}/>
        <Boton/>
    </div>
)

export default Componentes