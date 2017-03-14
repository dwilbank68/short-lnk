import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import LogIn from '../imports/ui/LogIn';
import SignUp from '../imports/ui/SignUp';
import Link from '../imports/ui/Link';
import NotFound from '../imports/ui/NotFound';

window.b = browserHistory;

const routes = (
    <Router history={browserHistory}>
        <Route path="/"         component={LogIn}/>
        <Route path="/signup"   component={SignUp}/>
        <Route path="/links"    component={Link}/>
        <Route path="*"         component={NotFound}/>
    </Router>
)

Meteor.startup(() => {
    ReactDOM.render(
        routes,
        document.getElementById('app')
    );
});

