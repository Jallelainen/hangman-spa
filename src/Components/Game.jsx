import * as React from 'react';
import { useState, useEffect } from 'react';
import GameService from '../API/GameService';

export const Game = (props) => {
    const [word, setWord] = useState(GameService.getWord());

    return (
        <div className="main-content">
            <h1>Hangmans Noose</h1>
        </div>
    )
};