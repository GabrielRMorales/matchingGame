import React from "react";

const Card = ({id, color, onClick: clickEvent, status})=>{
    let myStyle = {
        backgroundColor: (status == 1 || status == 2) ? color : "gray"
    };
    return (<div role="card" data-testid={`card-${id}`} style={myStyle} onClick={(e)=>{        
        clickEvent(id);
    }}> 
    </div>);
};

export default Card;