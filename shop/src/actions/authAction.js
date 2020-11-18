const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';

const login = (payload) => ({ type: LOGIN, payload });
const logout = () => ({ type: LOGOUT });
const loginSuccess = (valid) => ({ type: LOGIN_SUCCESS, valid })
const loginFailure = (valid) => ({ type: LOGIN_FAILURE, valid })

const authAction = {
    LOGIN,
    LOGOUT,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    login,
    logout,
    loginSuccess,
    loginFailure
}

export { authAction }
