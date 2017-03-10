import {
    player,
    GIVE_OUT,
    PICK_CARD
} from '../constants/constants';

export function Player(state = player, action) {
    switch (action.type) {
        case GIVE_OUT:
            return {...state, playerDoorCards: action.door, playerTreasureCards: action.treasure};
        case PICK_CARD:
            return{...state, playerInv: action.payload};
    }
    return state
}