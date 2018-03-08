import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from "react-redux";
import LeaderBoard from '../components/leaderboard';

class LeaderBoardContainer extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <LeaderBoard scores={this.props.scores}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        scores: state.scores
    };
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(LeaderBoardContainer);