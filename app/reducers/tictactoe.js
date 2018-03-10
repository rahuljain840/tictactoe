import * as actionTypes from '../helper/constant';
import _ from 'lodash';

const initialState = {
    board: ['', '', '', '', '', '', '', '', ''],
    currentPlayer: 'X',
    finish: false,
    scores: {
        player1: 0,
        player2: 0,
        draw: 0
    },
    message: 'X moves next',
    winningCombo: []
};

const winOptions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

export const tictactoeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RESET_GAME:
            const current_score = _.assign({}, state.scores);
            return _.assign({}, initialState, {
                scores: current_score
            });

        case actionTypes.SELECT_CHANCE:
            const selection = action.idx;
            const inValidMove = state.board[selection].length > 0 || state.finish;
            let newBoard = state.board.map((val, key) => {
                if (val.length > 0) {
                    return val;
                }
                return action.idx === key ? state.currentPlayer : val;
            });
            newBoard = inValidMove ? state.board : newBoard;
            var t = 0;
            const winningCheck = winOptions.some((val, key) => {
                if (val.every((index) => newBoard[index] === state.currentPlayer)) {

                    t = key;
                    return true;

                }
            });
            if (winningCheck) {

                console.log("index", t, winOptions[t]);

            }
            const drawCheck = (newBoard.reduce((a, b) => a + b, '')).length === 9;
            const newScore = _.assign({}, state.scores);
            if (winningCheck && !inValidMove) {
                state.winningCombo = winOptions[t];
                if (state.currentPlayer === 'X') {
                    newScore['player1'] += 1;
                } else {
                    newScore['player2'] += 1;
                }
            } else if (drawCheck && !inValidMove) {
                newScore.draw += 1;
            }
            const currPlayer = inValidMove || winningCheck || drawCheck ? state.currentPlayer : (state.currentPlayer === 'X' ? 'O' : 'X');
            const currMessage = winningCheck ? `${currPlayer} won the game!` : (drawCheck ? 'Its a draw!' : `${currPlayer} moves next`);
            return {
                board: newBoard,
                currentPlayer: currPlayer,
                finish: (winningCheck || drawCheck),
                scores: newScore,
                message: currMessage,
                winningCombo: state.winningCombo
            };

        default:
            return _.assign({}, state);
    };
}

