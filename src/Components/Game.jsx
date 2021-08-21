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

    /* Fetch word */
    useEffect(() => {
        GameService.getWord(setWord, setHiddenWord, setHint);
    }, []);
    
    const handleInput = (guess) => {
        let updated = hiddenWord;
        let rounds = round;
        
        /* Checks if maximum amount of tries is achieved*/
        if (rounds < 9) {
            /* Goes through each letter of the word and checks it against the guess */
            for (let i = 0; i < word?.length; i++) {
                if (word[i].toUpperCase() === guess.toUpperCase()) {
                    updated = setCharAt(updated, i, guess); //If it matches, a defined function inserts the guessed character into the right place in the hidden word
                }     
            };
            
            /* This checks if the guess was added to the hidden word. It also checks if the guess already has been made, if not, the guess will be saved in an array */
            if (updated.toUpperCase() === hiddenWord.toUpperCase()) {
                
                if(!guessedChars.includes(guess) && !word.toUpperCase().includes(guess.toUpperCase())){
                    setGuessedChars(guessedChars.concat(guess));
                    rounds++;
                }
            }else if (updated.toUpperCase() === word.toUpperCase()) { /* If the guess wasn't added to the hidden word, it checks if the hidden word is  */
                props.setGameState("won")
            }
            
            
        }else{
            /* If the round exceeds ten iterations, gamestate will be set to 'lost' */
            props.setGameState("lost");
        }

        /* Hooks are updated last since they take more time and cant keep up with loop-iterations, input field is also cleared */
        setHiddenWord(updated.toUpperCase());
        setRound(rounds);

        document.getElementById("guess-input").value = '';
    };

    return (
        <div className="main-content">
            <h2>Guess the Word</h2>
            {hiddenWord? <h4>{hiddenWord}</h4> : <h3>Loading...</h3>}
            <p><b>Used letters:</b> {guessedChars}</p>
            {round > 0 ? <p><b>Failed guesses:</b> {round} </p> : <div></div>}
            <input id="guess-input" placeholder="Enter you guess here..." type="text" onChange={(e) => handleInput(e.target.value)}/>
            <button className="neg-button" onClick={() => {props.setGameState("new")}}>Cancel Game</button>
        </div>
    )
};