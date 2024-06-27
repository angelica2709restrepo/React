import React from "react";
import Saludo from "./saludo";
import Iterante from "./iterante";
import Boton from "./boton";

const Componentes=(data)=>(
    <React.Fragment>
        <Saludo
            username = "Angelica"/>
        <Iterante
            chao={data}/>
        <Boton/>
    </React.Fragment>
)
export default Componentes