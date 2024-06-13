import React from "react";
import Formulario from "./formulario";
import "../CSS/stilo.css";
import Card from "../Card";

export default class Wuenas extends React.Component{
    state={
        form:{
            titulo:'',
            descripcion:'',
            img:''

        }
    }
    handleChange=e=>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        })
    }
    handleSubmit=async e=>{
        e.preventDefault()
        try{
            let config={
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(this.state.form)
            }
            let res=await fetch('http://localhost:8000/api/info', config)
            let json=await res.json()
            console.log(json)
        }
        catch(error){
            
        }
        console.log(this.state)
    }
    render(){
        return(
            <div>
                <Card
                {...this.state.form}
                />
            <Formulario
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            form={this.state.form}
            />
            </div>
        )
    }
}