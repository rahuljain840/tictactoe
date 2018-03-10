import { combineReducers } from 'redux';
import { tictactoeReducer as tictactoe } from './tictactoe';

const rootReducer = combineReducers({
    tictactoe
});

export default rootReducer;
