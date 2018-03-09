import React from 'react';
import PropTypes from 'prop-types';

class Scoreboard extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {

        };
        console.log("yyyyyy", this.props);
    }

    cards = () => {
        let cards = [];
        let scores = this.props.game.scores;
        for (let key in scores) {
            cards.push(<div className="card" style={{ width: "20rem" }} key={key}>
                <h1>{key}</h1>
                <div className="card-block">
                    <h4 className="card-title">Score {scores[key]}</h4>
                </div>
            </div>)
        }
        return cards;
    }
    
    render() {
        return (
            <section className="text-center header-top">
                <div className="parent">
                    {this.cards()}
                </div>
            </section>
        );
    }
}

Scoreboard.propTypes = {};

export default Scoreboard;

