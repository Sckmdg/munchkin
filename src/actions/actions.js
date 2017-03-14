import {
    GIVE_OUT,
    PICK_CARD,
    PUT_ON,
    CUT
} from '../constants/constants';

export function giveOut(cards) {
    return (dispatch) => {
        dispatch({
            type: GIVE_OUT,
            payload: cards
        })
    }
}

export function pickCard(card) {
    return (dispatch) => {
        dispatch({
            type: PICK_CARD,
            payload: card
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

export function cut(card) {
    return(dispatch) => {
        dispatch({
            type: CUT,
            payload: card
        })
    }
}

export default {giveOut, pickCard, putOn, cut}