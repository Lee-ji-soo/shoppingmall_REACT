import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const GuardRoute = ({ component: Component, needLogin, logged, ...res }) => {
    const flag = needLogin ? logged : !logged;
    const url = needLogin ? '/login' : '/main';
    return (
        <Route {...res} render={(props) => (
            flag
                ? (<Component {...props} />)
                : (<Redirect to={url} />)
        )} />
    )
};
export default GuardRoute;
