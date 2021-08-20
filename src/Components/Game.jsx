import * as React from 'react';
import { useState, useEffect } from 'react';
import GameService from '../API/GameService';

export const Game = (props) => {
    const [wordObj, setWordObj] = useState(GameService.getWord());

    console.log(wordObj);

    return (
        <div className="main-content">
            <h2>Guess the Word</h2>
            <button className="neg-button" onClick={() => {props.setGameState("new")}}>Cancel Game</button>
        </div>
    )
};