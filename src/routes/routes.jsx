import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

import Login from "../views/Login";
import Register from "../views/Register";
import ForgotPassword from "../views/ForgotPassword";
import DashBoard from "../views/Dashboard";
import Post from "../views/Post";

import PostCreate from "../views/Post/create";

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/forgot" exact component={ForgotPassword} />
            <Route path="/dash" exact component={DashBoard} />
            <Route path="/create" exact component={PostCreate} />
            <Route path="/post" exact component={Post} />
            <Redirect from="*" to="/dash" />
        </Switch>
    </Router>
);
