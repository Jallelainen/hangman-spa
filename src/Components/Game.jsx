import * as React from 'react';
import { useState, useEffect } from 'react';
import GameService from '../API/GameService';

export const Game = (props) => {
    const [wordObj, setWordObj] = useState();

    useEffect(() => {
        GameService.getWord(setWordObj);
    }, []);

console.log(wordObj);

    return (
        <div className="main-content">
            <h2>Guess the Word</h2>
            {
                wordObj? <p>{wordObj.word}</p> : <h4>"Loading..."</h4>
            }
            <button className="neg-button" onClick={() => {props.setGameState("new")}}>Cancel Game</button>
        </div>
    )
};