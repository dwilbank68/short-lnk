import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {Tracker} from 'meteor/tracker';

import LogIn from '../imports/ui/LogIn';
import SignUp from '../imports/ui/SignUp';
import Link from '../imports/ui/Link';
import NotFound from '../imports/ui/NotFound';

window.b = browserHistory;
const unauthPages = ['/','/signup'];
const authPages =   ['/links'];

const routes = (
    <Router history={browserHistory}>
        <Route path="/"         component={LogIn}/>
        <Route path="/signup"   component={SignUp}/>
        <Route path="/links"    component={Link}/>
        <Route path="*"         component={NotFound}/>
    </Router>
)

Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId();
    const pathname = browserHistory
                            .getCurrentLocation()
                            .pathname;
    const isUnauthPage =    unauthPages.includes(pathname);
    const isAuthPage =      authPages.includes (pathname);
    if (isUnauthPage) browserHistory.push('/links');
    if (isAuthPage) browserHistory.push('/');
})

Meteor.startup(() => {
    ReactDOM.render(
        routes,
        document.getElementById('app')
    );
});

