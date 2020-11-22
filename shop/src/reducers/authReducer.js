import { authAction } from '../actions';

const initialData = {
    auth: {},
    logged: true, // 실제 : false로 고쳐쓰기
    failure: 0
}

const authReducer = (state = initialData, action) => {
    switch (action.type) {
        case authAction.LOGIN: {
            return {
                ...state,
                payload: action.payload
            }
        }
        case authAction.LOGOUT: {
            return {
                ...state,
                auth: {},
                logged: false,
                failure: 0
            }
        }
        case authAction.LOGIN_SUCCESS: {
            return {
                ...state,
                logged: action.valid,
                failure: 0
            }
        }
        case authAction.LOGIN_FAILURE: {
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
