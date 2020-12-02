import { mypageAction } from '../actions';

const initialUser = {
    user: {
        name: '이지수',
        mail: 'nbsp3@naver.com',
        phone: '01080197982',
        juso: '서울시 마포구 합정동 91-9'
    }
}

const mypageReducer = (state = initialUser, action) => {
    switch (action.type) {
        default: {
            return state
        }
    }

}

export { mypageReducer };
