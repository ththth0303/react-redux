import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import RouteAuth from './auth/route.auth'
import Navbar from './navbar';
import Todo from '../App';
import Post from './post/post';
import Photo from './photo/photo';
import { Provider } from 'react-redux';

import store from "../store";

const Landing = () => {
    return <Provider store={store}>
            <BrowserRouter>
                <React.Fragment>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={({history}) => <h3 onClick={() => history.push('/app')}>Landing page</h3>} />
                        <Route exact path="/post" component={Post} />
                        <Route exact path="/todo" component={Todo} />
                        <Route exact path="/photo" component={Photo} />
                        <RouteAuth exact path="/app" component={() => <h3>App</h3>} />
                        <Route exact path="/login" component={({ history, match }) => <h3 onClick={() => history.push('/')}>Login:{match.params.userName}</h3>} />
                        <Route component={() => <h3>Not found</h3>} />
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
      </Provider>;
}
 
export default Landing;
