import React, { Component } from 'react';
import { render } from 'react-dom';

import TicTacToe from '../tictactoe';

class Home extends Component {

    render() {
        return (
            <div className="row">
                <TicTacToe />
            </div>
        );
    }
}

export default Home