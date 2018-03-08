import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from "react-redux";
import Home from '../components/home';

class HomeContainer extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Home />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    };
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(HomeContainer);