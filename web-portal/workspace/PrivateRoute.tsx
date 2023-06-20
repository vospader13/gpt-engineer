import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import AuthService from '../services/AuthService';

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (AuthService.isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;
