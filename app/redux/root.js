import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import deck, { actions as deckActions } from './modules/deck'
import player, { actions as playerActions } from './modules/player'

export const rootReducers = combineReducers({
  deck,
  player,
  routing: routerReducer
});

export const rootActions = Object.assign(
  {},
  deckActions,
  playerActions
);
