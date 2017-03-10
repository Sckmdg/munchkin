import {
    player,
    GIVE_OUT
} from '../constants/constants';

export function Player(state = player, action) {
    switch (action.type) {
        case GIVE_OUT:
            return {...state, playerCards: action.payload};
    }
    return state
}