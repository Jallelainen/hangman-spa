import * as React from 'react';
import { useState, useEffect } from 'react';

export const Outcome = (props) => {
    const [outcome, setOutcome] = useState(props.gameState);

    return (
        <div className="main-content">
            {outcome === "won" ? <h2>Congratulations!</h2> : <h2>How unfortunate...</h2>}
            <h3>You {outcome}!</h3>
            <div className="img-container">
                <img className="game-pic" src={"../Pics/hangman" + outcome +".png"} alt="Hangmans outcome picture"/>
            </div>
            <button className="pos-button" onClick={() => props.setGameState("inProgress")}>Play again?</button>
            <button onClick={() => props.setGameState("start")}>Home</button> 
        </div>
    )
};