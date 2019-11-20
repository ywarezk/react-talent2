import { SET_MESSAGE } from './actions/messaging.actions';

// {
//     message: '...',
//     user: {
//         vacations: [
//             {destination: 'Gaza'}
//         ]
//     }
// }

// {...state, user: {...state.user, vacations: [...state.user.vacations]}}

const initialState = {
    messaging: {
        message: 'initial message'
    },
    myVacations: {
        vacations: [],
        error: null
    },
    settings: {
        avatar: null,
        email: ''
    }

}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_MESSAGE:
            return { ...state, message: action.payload }
        default:
            return state;
    }
}