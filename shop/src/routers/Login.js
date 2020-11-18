import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthAction } from '../actions';
import { MainStyle, LoginStyle, Warning } from '../styled/style';
import { EMAIL_RULE } from '../utils/const';
import { useInput } from '../utils/useInput';

const Login = () => {
    const failure = useSelector(({ authReducer }) => authReducer.failure);
    const [id, onInputId, setId] = useInput('');
    const [password, onInputPassword, setPassword] = useInput('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        if (id == '') {
            alert('이메일을 입력해 주세요.')
        } else if (password == '') {
            alert('비밀번호를 입력해 주세요.')
        } else if (!id.match(EMAIL_RULE)) {
            alert('이메일이 형식에 맞지 않습니다.')
        } else {
            e.preventDefault();
            dispatch(AuthAction.login({ id, password }))
            resetInput();
            return true;
        }
    };

    const resetInput = () => {
        setId('');
        setPassword('');
    }

    return (
        <MainStyle>
            <LoginStyle>
                <h4 id="modal_title">로그인하세요</h4>
                <form id='input-form' onSubmit={handleSubmit}>
                    <div className="input">
                        <input value={id} onChange={onInputId}
                            type="email" placeholder="이메일을 입력하세요" />
                        <input value={password} onChange={onInputPassword}
                            type="password" placeholder="비밀번호를 입력하세요" />
                    </div>
                    <div className="submit">
                        <button id='submit-btn'>Submit</button>
                    </div>
                </form>
                {failure > 0 && (
                    <Warning>로그인 실패 횟수:{failure}</Warning>
                )}
            </LoginStyle>
        </MainStyle>
    )
};

export default Login;
