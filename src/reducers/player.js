import {
    player,
    GIVE_OUT,
    //PICK_CARD,
    //PUT_ON
} from '../constants/constants';

export function Player(state = player, action) {
    switch (action.type) {
        case GIVE_OUT:
            return {
                ...state, cards: {...state.cards, handCards: action.payload}
            };

        // case PICK_CARD:
        //     return {...state, inv: [...state.inv, action.payload]};

        // case PUT_ON:
        //     return {...state, playerTreasureCards: state.playerTreasureCards.filter( (item) => item !== action.payload)};
    }
    return state
}