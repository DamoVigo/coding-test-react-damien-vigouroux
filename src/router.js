import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import {
    HomePage,
    UserPage,
    E404Page
} from 'pages';

import { history } from 'utils/history';


class AppRouter extends React.Component {
    render() {
        var routes = (
            <Switch>
                <Route exact path="/" component={ HomePage } />
                <Route exact path="/users" component={ UserPage } />
                <Route exact path="/users/:id" component={ UserPage } />
                <Route exact path="*" component={ E404Page } />
            </Switch>
        )

        return (
            <div className="page-wrap">
                <Router history={ history }>
                    { routes }
                </Router>
            </div>
        )
    }
}


export default AppRouter;
