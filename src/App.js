import React, { Component } from "react";
import MountainCard from "./components/MountainCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import mountains from "./mountains.json";
import "./App.css";

let correctGuesses = 0;
let bestScore = 0;
let userMessage = "To win, you must climb each mountain once and only once.";

//Fisher–Yates shuffle
//Walk the array in the reverse order and swap each element with a random one before it:
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]];
    };
};

class App extends Component {

    // Setting this.state.mountains to the mountain json array
    state = {
        mountains,
        correctGuesses,
        bestScore,
        userMessage
    };
    //will process after user clicks an image
    setClicked = id => {

        let gameOver = false;

        // Make a copy of the state mountains array to work with
        const mountains = this.state.mountains;

        // Filter for the clicked mountain
        const clickedMountain = mountains.filter(mountain => mountain.id === id);

        // If the image clicked value is already true- loser, loser
        if (clickedMountain[0].clicked) {

            userMessage = "Sorry, you already clicked on that one.  Back down to the bottom!"
            gameOver = true;

            // Otherwise, if clicked = false, and the user hasn't finished
        } else if (correctGuesses < mountains.length - 1) {

            // Set its value to true
            clickedMountain[0].clicked = true;

            // increment the appropriate counter
            correctGuesses++;

            userMessage = "Keep Climbing!";

            if (correctGuesses > bestScore) {
                bestScore = correctGuesses;
                this.setState({ bestScore });
            }

        } else {

            // They win!
            userMessage = "CONGRATULATIONS - You climbed every mountain!";
            bestScore = 12;
            this.setState({ bestScore });

            gameOver = true;
        }

        if (gameOver) {
            //reset clicked values
            for (let i = 0; i < mountains.length; i++) {
                mountains[i].clicked = false;
            }
            // restart the guess counter
            correctGuesses = 0;
        }

        // Shuffle the array to be rendered in a random order
        shuffle(mountains);

        // Set this.state.mountains equal to the new mountains array
        this.setState({ mountains });
        this.setState({ correctGuesses });
        this.setState({ userMessage });
    };

    render() {
        return (
            <Wrapper>
                <Title>Mountain Memories</Title>

                <h3 className="stats">
                    {this.state.userMessage}
                </h3>
                <h3 className="stats">
                    <span className="climbed">Mountains Climbed: {this.state.correctGuesses}</span>
                    <span className="best">Best Score: {this.state.bestScore}</span>
                </h3>

                <div className="container">
                    <div className="row">
                        {this.state.mountains.map(mountain => (
                            <MountainCard
                                setClicked={this.setClicked}
                                id={mountain.id}
                                key={mountain.id}
                                image={mountain.image}
                            />
                        ))}
                    </div>
                </div>
            </Wrapper>
        );
    }
}

export default App;