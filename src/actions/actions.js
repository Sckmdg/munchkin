import {
    GIVE_OUT,
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

export default {giveOut, putOn, cut}