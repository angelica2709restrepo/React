import React from "react";

export default class Formulario extends React.Component{
    render(){
        const {onChange,form,onSubmit}=this.props
        return(
            <div>
                <form onSubmit={onSubmit}>
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
}