import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { getSession } from '../../Login/Store/LoginSelector';

const PrivateRoute = React.memo(({ children, ...rest }) => {
    let auth = useSelector(getSession);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.session ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
});

PrivateRoute.displayName = 'PrivateRoute';
export default PrivateRoute;