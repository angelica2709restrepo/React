import React from "react";
import "./CSS/stilo.css";
import gatito from "./IMG/gatito.png"


class Card extends React.Component{
    render(){
        const {titulo,descripcion,img,color} = this.props;

        return(<React.Fragment className="tarjeta">
            
            <React.Fragment className="contenido" style={{background:`${color}`}}>
                <React.Fragment className="font">
                    <h1>Hola {titulo}</h1>
                    <p>{descripcion}</p>
                </React.Fragment>
                <React.Fragment>
                    <img src={img || gatito} className="logo" alt=""/>
                </React.Fragment>
            </React.Fragment>

        </React.Fragment>) 
    }
}

export default Card