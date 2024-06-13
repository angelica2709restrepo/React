import React from "react";
/* import Card from "../Card"; */
import Hola from "../saludo"
import huron from "../IMG/huron.jpg";
import gatito from "../IMG/gatito.png";
import koku from "../IMG/koku.jpg";
import rappi from "../IMG/rappi.jpg";
import visco from "../IMG/visco.jpg";
import Iterador from "../iterante"
import Boton from "../boton";

export default class Maestro extends React.Component{
        state = {
            data:[]
        }
        async componentDidMount(){
            await this.cargarComponentes()
        }
        cargarComponentes=async()=>{
            let res=await fetch('http://localhost:8000/api/info')
            let data=await res.json()
            this.setState({
                data
            })
            console.log(data)
        }
    render(){
        return(
            <div>
                 <Hola
                    username = "Angelica"
                />
                <Iterador
                    chao={this.state.data}
                />
                <Boton 
                />
            </div>
        )
    }
}