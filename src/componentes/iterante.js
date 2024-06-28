import React from "react";
import Card from "./card";

const Iterante = ({exe})=>(
    <div>
        {
        exe.map((exes)=>(
            <Card
            key={exes.id}
            {...exes}/>
        )
    )
}
    </div>
)
export default Iterante
