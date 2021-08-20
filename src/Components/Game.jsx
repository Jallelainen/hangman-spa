import * as React from 'react';
import { useState, useEffect } from 'react';
import GameService from '../API/GameService';

export const Game = (props) => {
    const [word, setWord] = useState();
    const [hiddenWord, setHiddenWord] = useState();
    const [hint, setHint] = useState();

    useEffect(() => {
        GameService.getWord(setWord, setHiddenWord, setHint);
    }, []);

    return (
        <div className="main-content">
            <h2>Guess the Word</h2>
            {
                hiddenWord? <h4>{hiddenWord}</h4> : <h3>Loading...</h3>
            }
            <button className="neg-button" onClick={() => {props.setGameState("new")}}>Cancel Game</button>
        </div>
    )
};