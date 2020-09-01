import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { bool, func } from 'prop-types';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            auth ? <Component {...props} /> : <Redirect to="/login" />
        }
    />
);

PrivateRoute.propTypes = {
    auth: bool.isRequired,
    component: func.isRequired,
};
export default PrivateRoute;
