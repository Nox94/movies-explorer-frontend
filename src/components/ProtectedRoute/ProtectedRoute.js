import React, {useContext} from "react";
import {Route, Redirect} from "react-router-dom";
import {LoggedInContext} from '../../contexts/contexts.js'

const ProtectedRoute = ({component: Component, ...props}) => {
    const {loggedIn} = useContext(LoggedInContext);
    return (
        <Route>
            {() =>
                loggedIn ? <Component {...props} /> : <Redirect to="/signin"/>
            }
        </Route>
    );
};

export default ProtectedRoute;
