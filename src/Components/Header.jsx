import * as React from 'react';

export const Header = (props) => {

    return (
        <div className="App-header">
            <h1 id="header-title" onClick={() => props.setGameState("start")}>Hangmans Noose</h1>
        </div>
    )
};