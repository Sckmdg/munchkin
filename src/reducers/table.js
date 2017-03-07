import {
    START_GAME,
    initialState
} from '../constants/constants';

export function startGame(state = initialState) {
    switch (action.type) {
        case START_GAME:
            return {...state, something: action.payload};
        default:
            return state
    }
}