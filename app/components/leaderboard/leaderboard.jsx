import React, { Component } from 'react';
import { render } from 'react-dom';

import Search from '../search';
import FlightResult from '../flight-result';
import SearchBreadCrumb from '../shared/search-breadcrumb';

class LeaderBoard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Player 1</th>
                    <th scope="col">Player 2</th>
                    <th scope="col">Draw</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{this.props.scores.player1}</td>
                    <td>{this.props.scores.player2}</td>
                    <td>{this.props.scores.draw}</td>
                    </tr>                    
                </tbody>
            </table>
        );
    }
}

export default LeaderBoard