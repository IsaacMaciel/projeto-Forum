import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

import Login from "../views/Login";
import Register from "../views/Register";

export default () => (
    <Router>
        <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Redirect from="*" to="/login" />
        </Switch>
    </Router>
);
