import React, { Component } from "react";
import cards from "../../cards.json";
import Card from "../Card";

class Game extends Component {

    state = {
        dinosaurs: cards,
        score: 0,
        highScore: 0,
        losses: 0,
        clicked: []
    }

    startGame = () => {
        this.setState({ score: 0, dinosaurs: this.state.dinosaurs.sort(() => (0.5 - Math.random())), clicked: [] });
    }

    getDinosaur = (id) => {
            //console.log(this.state.dinosaurs);
           // console.log(id);
            if (this.state.clicked.includes(this.state.dinosaurs[id])) {
                this.setState({ losses: this.state.losses + 1 });
                this.startGame();
            } else {
                this.setState({ score: this.state.score + 1, dinosaurs: this.state.dinosaurs.sort(() => (0.5 - Math.random())) });
                this.state.clicked.push(this.state.dinosaurs[id]);
                if (this.state.score >= this.state.highScore) {
                    this.setState({ highScore: this.state.score + 1});
                }
            }
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <p>Current score: {this.state.score}</p>
                    <p>High score: {this.state.highScore}</p>
                    <p>Losses: {this.state.losses}</p>
                </div>
                <div className="row">
                    {this.state.dinosaurs.map(dinosaur => (
                        <Card
                            name={dinosaur.name}
                            image={dinosaur.image}
                            id={dinosaur.id}
                            key={dinosaur.id}
                            getDinosaur={this.getDinosaur}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Game;