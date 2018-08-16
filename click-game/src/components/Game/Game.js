import React, { Component } from "react";
import cards from "../../cards.json";
import Card from "../Card";

class Game extends Component {

    state = {
        dinosaurs: cards,
        score: 0,
        highScore: 0,
        losses: 0,
        clicked: false
    }

    getDinosaur = (id) => {

        if (!this.state.clicked) {
            this.setState({clicked: true, score: this.state.score +1})
        }  

        

        this.setState({
            
        })
        alert(id);
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
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