/**
 * action => {type: 'SET_MESSAGE', payload? : 'new message'}
 */

export const SET_MESSAGE = 'SET_MESSAGE';

export function setMessage(newMessage) {
    return {
        type: SET_MESSAGE,
        payload: newMessage
    }
}