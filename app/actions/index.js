import * as types from '../api/constant';

export const isSuccess = (check) => {
    return {
        type: types.CHECK_SUCCESS,
        check
    };
};

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
