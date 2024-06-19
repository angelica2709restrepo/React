import React from "react";
import Card from "./Card";

const Iterador = ({chao})=>(
    <React.Fragment>
        {
            chao.map((chao)=>{
                return(
                    <Card
                        key={chao.id}
                        titulo = {chao.titulo}
                        descripcion = {chao.descripcion}
                        img = {chao.img}
                        color = {chao.color}
                    />
                )
            })
        }
    </React.Fragment>
)

export default Iterador