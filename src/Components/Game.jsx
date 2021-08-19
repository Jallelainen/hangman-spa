import * as React from 'react';
import { useState, useEffect } from 'react';
import GameService from '../API/GameService';

export const Game = (props) => {
    const [word, setWord] = useState(GameService.getWord());

    return (
        <div className="main-content">
            <h2>Guess the Word</h2>
            
        </div>
    )
};