import React from "react";
import Card from "./Card";


const Iterante = ({chao})=>(
    <div>
        {
            Array.isArray(chao) && chao.length > 0 ? (
            chao.map((chaoItem) => (
                <Card
                    key={chaoItem.id}
                    {...chaoItem}
                />
        ))
    ):(
        <p>No hay datos disponibles</p>
    )
}
    </div>
)
export default Iterante
