import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Auth from './auth';

const RouteAuth = ({component: Component, ...rest}) => {
    if (!Auth.isAuth()) {
        return <Redirect to={{
            pathname: '/login'
        }} />
    }
    
    return (
        <Route
            {...rest}
            render={props => (
                <Component {...props} />
            )}
        />
    );
}
 
export default RouteAuth;