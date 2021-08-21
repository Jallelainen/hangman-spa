import * as React from 'react';
import { useState, useEffect } from 'react';
import GameService from '../API/GameService';

export const Start = (props) => {

    return (
        <div className="main-content">
            <h2>Hangmans Noose</h2>
            <h3>Start a new game?</h3>
            <button className="pos-button" onClick={() => props.setGameState("inProgress")}>Generate new Word</button>
            <button onClick={() => props.setShowInfo(true)}>How to Play?</button>
        </div>
    )
};