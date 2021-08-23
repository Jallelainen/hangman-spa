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

    let gameImage = "../Pics/hangman" + round +".png";
    let errorMsg = "Error! You have already guessed this letter: "

    /* Api call: Fetch word */
    useEffect(() => {
        GameService.getWord(setWord, setHiddenWord, setHint);
    }, []);
    
    /* First it checks if maximum amount of tries is achieved, after which it checks if the guess matches the word*/
    /* Then it checks if the guess is already made. If not, the guess will be saved */
    /* If the guess wasn't already made, it checks if the updated hidden word matches the real word and if it does, gamestate will be set to 'won' */
    /* If the round exceeds ten iterations, gamestate will be set to 'lost' */
    /* Hooks are updated last since they take more time and cant keep up with loop-iterations, input field is also cleared */
    const handleInput = (guess) => {
        let updated = hiddenWord;
        let rounds = round;
        
        if (word) {
            if (rounds < 9) {
                
                updated = checkGuess(updated, guess);
                
                
                if (updated.toUpperCase() === hiddenWord.toUpperCase()) {
                    
                    rounds = handleWronglyGuessed(guess, rounds);

                }else if (updated.toUpperCase() === word.toUpperCase()) { 
                    props.setGameState("won");
                    props.setWord(word);
                }
            
            }else{
                
                props.setGameState("lost");
                props.setWord(word);
            }
        
            setHiddenWord(updated.toUpperCase());
            setRound(rounds);
        
            document.getElementById("guess-input").value = '';
        }
    };

    /* Goes through each letter of the word and checks it against the guess */
    /* if it matches, a defined function inserts the guessed character into the right place in the hidden word */
    const checkGuess = (updatedHidden, guess) => {
        for (let i = 0; i < word?.length; i++) {
            if (word[i].toUpperCase() === guess.toUpperCase()) {
                updatedHidden = setCharAt(updatedHidden, i, guess); 
            }     
        };

        return updatedHidden;
    };

    /* If this method is called its because a guess is wrong. The method firstly checks if the guess havent been made, in which case its saved. */
    /* If the guess was already made, then an alert is sent to the user informing on which character. It also ticks up the round */
    const handleWronglyGuessed = (guess, rounds) => {
        if(!guessedChars.includes(guess) && !word.toUpperCase().includes(guess.toUpperCase())){
            setGuessedChars(guessedChars.concat(guess));
            rounds++;

        }else{
            alert(errorMsg + guess.toUpperCase());
        }

        return rounds;
    };

    return (
        <div className="main-content">
            <h2>Guess the Word</h2>
            <div className="img-container">
                {round > 0 ? <img className="game-pic" src={gameImage} alt="Hangmans noose"/> : <div className="game-pic"></div>}
            </div>
            {hiddenWord? <h4 id="hidden-word">{hiddenWord}</h4> : <h3>Loading...</h3>}
            <p id="used-letters"><b>Used letters:</b> {guessedChars}</p>
            {round > 0 && (<p><b>Failed guesses:</b> {round} </p>)}
            <input id="guess-input" placeholder="Enter you guess here..." type="text" onChange={(e) => handleInput(e.target.value)}/>
            <button className="neg-button" onClick={() => {props.setGameState("start")}}>Cancel Game</button>
            {round > 6 && (<button id="hint" onClick={() => alert(hint)}>Hint?</button>)}
        </div>
    )
};