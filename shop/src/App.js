import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Header, Footer, Login, Main, Cart, Mypage } from './routers';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/main' component={Main} />
                <Route path='/cart' component={Cart} />
                <Route path='/mypage' component={Mypage} />
                <Redirect to='/main' />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
};

export default App;
