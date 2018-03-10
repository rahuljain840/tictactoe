import * as types from '../helper/constant';

export function selectChance(index) {
    return {
        type: types.SELECT_CHANCE,
        idx: index
    };
}

export function resetGame() {
    return {
        type: types.RESET_GAME
    };
}
