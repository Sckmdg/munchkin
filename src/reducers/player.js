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
            return {...state,
                cards: {...state.cards, inv: [...state.cards.inv, action.payload], handCards: state.cards.handCards.filter( (item) => item.id !== action.payload.id)},
                stats: {...state.stats, bonus: state.stats.bonus + action.payload.bonus}
            };

    }
    return state
}