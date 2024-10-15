import { useState } from "react";
import GameBoard from "./GameBoard";
import "./index.css";

export function WordlePage() {
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const wordLength = 5;

  const words = ["Flame"];
  const wordOfDay = words[0];
  const [guess1, setGuess1] = useState("");
  let guess1Split;

  if (guess1 == wordOfDay) {
    console.log("Congratulations!");
  } else {
    console.log("Try Again!");
    // console.log(guess1.split(""));
    guess1Split = guess1.split("");
    console.log(guess1Split);
    console.log(guess1Split[0]);
    if (wordOfDay.includes(guess1Split[0])) {
      console.log("Letter is in word")
    }
  }

  return (
    <main>
      <div className="game">
        <GameBoard guesses={guesses} currentGuess={currentGuess} wordLength={wordLength} />
        <h1>Welcome to Wordle!</h1>
        <form action="">
          Guess 1:
          <input type="text"
          name="guess1"
          maxLength={5}
          onChange={(event) => setGuess1(event.target.value)}/>
        </form>
        <h3>{guess1}</h3>
        <h3>Letter {guess1Split[0]}</h3>
      </div>
    </main>
  );
}
