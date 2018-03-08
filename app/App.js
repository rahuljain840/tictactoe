import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Styles from './App.css'
// Import custom components
import HomeContainer from './container/HomeContainer.jsx';
import Header from './components/shared/header'

export default class App extends React.Component {

  render() {
    return (
      <div className="wrapper container divContainer">
        <Header />
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={HomeContainer} />
              <Route exact path="/leaderboard" component={LeaderBoardContainer} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
