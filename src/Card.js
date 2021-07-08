import React from "react";

const Card = ({id})=>{
    let myStyle = {
        backgroundColor: "gray"
    };
    return (<div role="card" data-testid={`card-${id+1}`} style={myStyle} > 
    </div>);
};

export default Card;