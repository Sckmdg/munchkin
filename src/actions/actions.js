import {
    START_GAME
} from '../constants/constants';

export function startGame(message) {
    return (dispatch) => {
        dispatch({
            type: START_GAME,
            payload: message
        })
    }
}


export default {startGame}