import React from 'react';
import PropTypes from 'prop-types';

class Leaderboard extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    cards = () => {
        let cards = [];
        let scores = this.props.tictactoe.scores;
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
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="parent">
                            {this.cards()}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

Leaderboard.propTypes = {};

export default Leaderboard;

