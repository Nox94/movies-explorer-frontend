import React, {useContext} from "react";
import {Route, Redirect} from "react-router-dom";
import {LoggedInContext} from '../../contexts/contexts.js'

const ProtectedRoute = ({component: Component, ...props}) => {
    const {loggedIn} = useContext(LoggedInContext);
    const token = localStorage.getItem('token')
    return (
        <Route>
            {() =>
                token ? <Component {...props} /> : <Redirect to="/signin"/>
            }
        </Route>
    );
};

export default ProtectedRoute;
