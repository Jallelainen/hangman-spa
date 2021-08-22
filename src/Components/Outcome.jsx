import * as React from 'react';
import { useState } from 'react';

export const Outcome = (props) => {
    const [outcome] = useState(props.gameState);
    const [word] = useState(props.word)

    return (
        <div className="main-content">
            {outcome === "won" ? <h2>Congratulations!</h2> : <h2>How unfortunate...</h2>}
            <h3>You {outcome}!</h3>
            <div className="img-container">
                <img className="game-pic" src={"../Pics/hangman" + outcome +".png"} alt="Hangmans noose outcome"/>
            </div>
            <h4>{word}</h4>
            <button className="pos-button" onClick={() => props.setGameState("inProgress")}>Play again?</button>
            <button onClick={() => props.setGameState("start")}>Home</button> 
        </div>
    )
};