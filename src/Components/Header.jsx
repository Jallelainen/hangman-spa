import * as React from 'react';

export const Header = (props) => {

    return (
        <div className="App-header">
            <h1 id="header-title" onClick={() => props.setGameState("start")}>Hangmans Noose</h1>
            <ul>
                <li><h3>Game</h3></li>
                <li><h3>History</h3></li>
            </ul>
        </div>
    )
};