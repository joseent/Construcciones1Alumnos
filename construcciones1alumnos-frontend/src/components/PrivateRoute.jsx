// @ts-check
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
const userLogged = JSON.parse(localStorage.getItem('userLogged'))

    return (
        <Route
        {...rest}
        render={({ location }) =>
          userLogged ? (
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
        }
        
        export default PrivateRoute;