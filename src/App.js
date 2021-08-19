import * as React from 'react';
import { useState, useEffect } from 'react';
import GameService from './API/GameService';
import './App.css';

//----COMPONENTS----
import {Header} from './Components/Header';
import {Footer} from './Components/Footer';
import {Start} from './Components/Start';
import {Game} from  './Components/Game';
import {Outcome} from './Components/Outcome';



function App() {
  const [gameState, setGameState] = useState("new");

  return (
    <div className="App">
      <header className="App-header">
        <Header GameService />
          {
            gameState === "new" ? <Start/> : gameState === "inProgress" ? <Game/> : gameState === "won" ? <Outcome gameState /> : <Outcome gameState />
          }
        <Footer />
      </header>
    </div>
  );
}

export default App;
