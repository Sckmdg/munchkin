import {
    player,
    GIVE_OUT,
    PUT_ON
} from '../constants/constants';

export function Player(state = player, action) {
    switch (action.type) {
        case GIVE_OUT:
            return {...state, cards: {...state.cards, handCards: action.payload}};

        case PUT_ON:
            return {...state, cards: {...state.cards, inv: action.payload, handCards: state.cards.handCards.filter( (item) => item !== action.payload.id)}};

    }
    return state
}