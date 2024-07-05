import React from "react";
import "./CSS/stilo.css";
import gatito from "./IMG/gatito.png"

class Card extends React.Component{
    render(){
        const {titulo,descripcion,img} = this.props;
        return(
        <div className="tarjeta">
            <div className="contenido">
                <div className="font">
                    <h1>Hola! {titulo}</h1>
                    <p>{descripcion}</p>
                </div>
                <div>
                    <img src={img || gatito} className="logo" alt=""/>
                </div>
            </div>
        </div>) 
    }
}
export default Card