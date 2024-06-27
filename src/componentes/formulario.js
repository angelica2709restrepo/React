import React from "react";
import "./CSS/stilo.css";

const Formulario=({onChange,form,onSubmit})=>(
    <div className="contenedor">
        <form className="formulario" onSubmit={onSubmit}>
            <input 
            type="text" 
            name="titulo" 
            placeholder="Nombre" 
            onChange={onChange} 
            value={form.nombre}/>
            <br></br>
            <input 
            type="text" 
            name="descripcion" 
            placeholder="Descripcion" 
            onChange={onChange} 
            value={form.descip}/>
            <br></br>
            <input 
            type="text" 
            name="img" 
            placeholder="Url imagen" 
            onChange={onChange} 
            value={form.img}/>
            <br></br>
            <button type="submit">Enviar</button>
        </form>
    </div>
)
export default Formulario

/* export default class Formulario extends React.Component{
    render(){
        const {onChange,form,onSubmit}=this.props
        return(
            <div className="contenedor">
                <form className="formulario" onSubmit={onSubmit}>
                    <input 
                    type="text" 
                    name="titulo" 
                    placeholder="Nombre" 
                    onChange={onChange} 
                    value={form.nombre}
                    />
                    <br></br>
                    <input 
                    type="text" 
                    name="descripcion" 
                    placeholder="Descripcion" 
                    onChange={onChange} 
                    value={form.descip}
                    />
                    <br></br>
                    <input 
                    type="text" 
                    name="img" 
                    placeholder="Url imagen" 
                    onChange={onChange} 
                    value={form.img}
                    />
                    <br></br>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        )
    }
} */