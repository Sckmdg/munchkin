import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import deck, { actions as deckActions } from './modules/deck'
import player, { actions as playerActions } from './modules/player'
import { reducer as formReducer } from 'redux-form'
import { firebaseStateReducer as firebase } from 'react-redux-firebase'

export const rootReducers = combineReducers({
  deck: deck,
  player: player,
  firebase: firebase,
  form: formReducer,
  routing: routerReducer
});

export const rootActions = Object.assign(
  {},
  deckActions,
  playerActions
);
