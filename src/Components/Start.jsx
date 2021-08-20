import * as React from 'react';
import { useState, useEffect } from 'react';
import GameService from '../API/GameService';

export const Start = (props) => {

    return (
        <div className="main-content">
            <h1>Hangmans Noose</h1>
            <h2>Start a new game?</h2>
            <button className="pos-button" onClick={() => props.setGameState("inProgress")}>Generate new Word</button>
            <button onClick={() => props.setShowInfo(true)}>How to Play?</button>
        </div>
    )
};