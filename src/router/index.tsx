/* eslint-disable prettier/prettier */
import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Router from './Router'

const ExamesApp = lazy(() => import('exames/App'))

const App = () => (
    <div>
        <h1>Container Micro-frontends | DASA</h1>

        <Link to="/exames/">Go to exames</Link>
    </div>
)

const Notfound = () => (
    <div>
        <h1>Notfound</h1>
    </div>
)

const Faq = () => (
    <div>
        <h1>FAQ</h1>
    </div>
)

const Signin = () => (
    <div>
        <h1>Signin</h1>
    </div>
)

const Routes: React.FC = () => (
    <BrowserRouter>
        <Suspense fallback={<h6>Loading Microfrontends</h6>}>
            <Switch>
                <Router component={Signin} exact path="/signin" restricted />

                <Router component={App} exact isPrivate path="/" />

                <Router component={ExamesApp} exact isPrivate path="/exames/*" />

                <Router component={Faq} exact path="/faq" />

                <Route component={Notfound} />
            </Switch>
        </Suspense>
    </BrowserRouter>
)

export default Routes
