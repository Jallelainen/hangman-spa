import * as React from 'react';
import { useState, useEffect } from 'react';
import GameService from '../API/GameService';
import setCharAt from '../Utilities/Functions';

export const Game = (props) => {
    const [word, setWord] = useState();
    const [hiddenWord, setHiddenWord] = useState();
    const [hint, setHint] = useState();
    const [guessedChars, setGuessedChars] = useState([]);
    const [round, setRound] = useState(0);

    useEffect(() => {
        GameService.getWord(setWord, setHiddenWord, setHint);
    }, []);
    
    const handleInput = (guess) => {
        let updated = hiddenWord;
        let rounds = round;
        
        if (rounds < 9) {
            for (let i = 0; i < word?.length; i++) {
                if (word[i].toUpperCase() === guess.toUpperCase()) {
                    updated = setCharAt(updated, i, guess);
                }     
            };
            
            if (updated.toUpperCase() === hiddenWord.toUpperCase()) {
                
                if(!guessedChars.includes(guess)){
                    setGuessedChars(guessedChars.concat(guess));
                    rounds++;
                }
            }else if (updated.toUpperCase() === word.toUpperCase()) {
                props.setGameState("won")
            }
            
            
        }else{
            rounds++;
            props.setGameState("lost");
        }

        setHiddenWord(updated.toUpperCase());
        setRound(rounds);

        document.getElementById("guess-input").value = '';
    };

    return (
        <div className="main-content">
            <h2>Guess the Word</h2>
            {hiddenWord? <h4>{hiddenWord}</h4> : <h3>Loading...</h3>}
            <p><b>Failed guesses:</b> {round}</p>
            <p><b>Used letters:</b> {guessedChars}</p> 
            <input id="guess-input" placeholder="Enter you guess here..." type="text" onChange={(e) => handleInput(e.target.value)}/>
            <button className="neg-button" onClick={() => {props.setGameState("new")}}>Cancel Game</button>
        </div>
    )
};