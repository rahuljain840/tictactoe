import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Home from './containers/Home';
import Score from './containers/Score';
import NotFound from './components/NotFound';

const App = () => (
    <Router>
        <div>
            <Header/>
            <Switch>
                <Redirect exact from="/" to="/home"/>
                <Route path="/home" component={Home}/>
                <Route path="/leaderboard" component={Score}/>
                <Route path="/404" component={NotFound}/>
                <Redirect from="*" to="/404"/>
            </Switch>
        </div>
    </Router>
);

export default App;
