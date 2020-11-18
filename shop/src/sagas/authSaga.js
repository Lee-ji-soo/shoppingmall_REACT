import { call, put, takeLatest } from 'redux-saga/effects';
import Axios from 'axios';
import { authAction } from '../actions';

const URL = "http://localhost:4000/signin";
//id: 1 ;
//password: 1 ;

function* fetchAuthSaga(action) {
    const { payload } = action;
    try {
        const { data: { valid, token } } = yield call([Axios, 'post'], URL, payload);

        if (valid) {
            yield put(authAction.loginSuccess(valid));
        } else {
            yield put(authAction.loginFailure(valid));
        }
    } catch (error) {
        yield put(authAction.loginFailure(false));
    };
};

export default function* watchAuth() {
    yield takeLatest(authAction.LOGIN, fetchAuthSaga);
};
