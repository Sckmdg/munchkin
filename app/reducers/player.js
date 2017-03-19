import {
    player,
    GIVE_OUT,
    PICK_CARD,
    PUT_ON
} from '../constants/constants';

export function Player (state = player, action) {
  switch (action.type) {
    case GIVE_OUT:
      return {...state, playerDoorCards: action.door, playerTreasureCards: action.treasure};
    case PICK_CARD:
      return {...state, playerInv: [...state.playerInv, action.payload]};
    case PUT_ON:
      console.log(action.payload.id);
      return state;
      // state.playerTreasureCards.splice(action.payload.id, 1);
      // return state;
      //return{...state, playerTreasureCards: state.playerTreasureCards.splice(action.payload.id, 1)};
  }
  return state;
}
