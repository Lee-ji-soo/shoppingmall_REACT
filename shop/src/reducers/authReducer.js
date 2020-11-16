import { AuthAction } from '../actions';

const initialData = {
    auth: {},
    logged: false,
    failure: 0
}

const authReducer = (state = initialData, action) => {
    switch (action.type) {
        case AuthAction.LOGIN: {
            return {
                ...state,
                payload: action.payload
            }
        }
        case AuthAction.LOGOUT: {
            return {
                ...state,
                auth: {},
                logged: false,
                failure: 0
            }
        }
        case AuthAction.LOGIN_SUCCESS: {
            return {
                ...state,
                logged: action.valid,
                failure: 0
            }
        }
        case AuthAction.LOGIN_FAILURE: {
            return {
                ...state,
                logged: action.valid,
                failure: state.failure + 1
            }
        }
        default: {
            return state
        }
    }
}

export { authReducer };
