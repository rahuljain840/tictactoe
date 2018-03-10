import React from 'react';
import { render } from 'react-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { default as rootReducer } from './reducers';
import { isProd } from './config';
import App from './app';
import './styles/less/style.less';

const logger = createLogger({
    predicate: (getState, action) => !isProd()
});

const reducers = combineReducers({ state: rootReducer });
const store = createStore(reducers, applyMiddleware(logger));

render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root')
);
