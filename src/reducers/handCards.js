import {
    initialState,
    PICK_CARD
} from '../constants/constants';

export function HandCards(state = initialState, action) {
    switch (action.type){
        case PICK_CARD:
            return{...state, playerInv: action.payload};
    }
    return state
}