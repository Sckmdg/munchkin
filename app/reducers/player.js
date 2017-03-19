import {
    player,
    GIVE_OUT,
    PUT_ON,
    TAKE_RACE,
    TAKE_KLASS,
    TURN
} from '../constants/constants';

export function Player (state = player, action) {
  switch (action.type) {
    case GIVE_OUT:
      return {...state, cards: {...state.cards, handCards: action.payload}};

    case PUT_ON:
      return {...state,
        cards: {...state.cards,
          inv: [...state.cards.inv, action.payload],
          handCards: state.cards.handCards.filter((item) => item.id !== action.payload.id)},
        stats: {...state.stats, bonus: state.stats.bonus + action.payload.bonus}
      };

    case TAKE_RACE:
      return {...state,
        stats: {...state.stats, race: action.payload.race},
        cards: {...state.cards, handCards: state.cards.handCards.filter((item) => item.id !== action.payload.id)}
      };

    case TAKE_KLASS:
      return {...state,
        stats: {...state.stats, klass: action.payload.klass},
        cards: {...state.cards, handCards: state.cards.handCards.filter((item) => item.id !== action.payload.id)}
      };

    case TURN:
      return {...state, turn: !state.turn};

    default:
      return state;
  }
}
