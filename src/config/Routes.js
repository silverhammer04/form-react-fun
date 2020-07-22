import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import Register from '../pages/Register';
import Reset from '../pages/ResetPassword';

const Routes = (props) => {
    return (
        <Switch>
          <Route path="/SignIn">
            <SignIn />
          </Route>
          <Route path="/Register">
            <Register adduser={user => props.addUser(user)}/>
          </Route>
          <Route path="/ResetPassword">
            <Reset />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
        </Switch>
    );
}

export default Routes;