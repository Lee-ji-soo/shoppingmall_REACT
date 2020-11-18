import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Header, Footer, Login, Main, Cart, Mypage } from './routers';
import { GuardRoute } from './guards';

const App = () => {
    const logged = useSelector(({ authReducer }) => authReducer.logged);
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <GuardRoute path='/login' component={Login} logged={logged} needLogin={false} />
                <Route path='/main' component={Main} />
                <GuardRoute path='/cart' component={Cart} logged={logged}
                    needLogin={true} />
                <GuardRoute path='/mypage' component={Mypage} logged={logged}
                    needLogin={true} />
                <Redirect to='/main' />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
};

export default App;
