/* eslint-disable prettier/prettier */
import React from 'react'
import { Redirect, Route, RouteProps as ReactDOMRouterProps } from 'react-router-dom'

import { session } from './session'

interface RouterProps extends ReactDOMRouterProps {
    component: React.ComponentType
}

const PrivateRoute: React.FC<RouterProps> = ({ component: Component, ...rest }) => (
    <Route {...rest} render={() => (session ? <Component /> : <Redirect to="/signin" />)} />
)

export default PrivateRoute
