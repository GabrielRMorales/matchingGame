import React from "react";

const NewGameButton = ({onClick: newGame})=>{

    return (<button role="new-game-btn" onClick={newGame}>New Game</button>)
};

export default NewGameButton;