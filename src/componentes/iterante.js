import React from "react";
import Card from "./card";

const Iterante = ({exes})=>(
    <div>
        {
        exes.map((exe)=>( 
            <Card
            key={exe.id}
            {...exe}/>

        )
    )
}
    </div>
)

export default Iterante