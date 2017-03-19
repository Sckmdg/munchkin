import {
    GIVE_OUT,
    PUT_ON,
    CUT,
    TAKE_RACE,
    TAKE_KLASS,
    TURN
} from '../constants/constants';

export function giveOut(cards) {
    return (dispatch) => {
        dispatch({
            type: GIVE_OUT,
            payload: cards
        })
    }
}

export function putOn(card) {
    return (dispatch) => {
        dispatch({
            type: PUT_ON,
            payload: card
        })
    }
}

export function takeRace(card) {
    return (dispatch) => {
        dispatch({
            type: TAKE_RACE,
            payload: card
        })
    }
}

export function takeKlass(card) {
    return (dispatch) => {
        dispatch({
            type: TAKE_KLASS,
            payload: card
        })
    }
}

export function cut(card) {
    return (dispatch) => {
        dispatch({
            type: CUT,
            payload: card
        })
    }
}

export function turn() {
    return (dispatch) => {
        dispatch({
            type: TURN
        })
    }
}

export default {giveOut, putOn, cut, takeRace, takeKlass, turn}