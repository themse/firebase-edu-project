import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ children, currentUser, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
