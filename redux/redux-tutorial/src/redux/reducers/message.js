import { SET_MESSAGE } from '../actions/messaging.actions';

const initialState = {
    message: 'initial message'
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_MESSAGE:
            return { ...state, message: action.payload }
        default:
            return state;
    }
}

