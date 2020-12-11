/* eslint-disable prettier/prettier */
import React from 'react'
import { Redirect, Route, RouteProps as ReactDOMRouterProps } from 'react-router-dom'

import { session } from './session'

interface RouterProps extends ReactDOMRouterProps {
    restricted?: boolean
    component: React.ComponentType
}

const PublicRoute: React.FC<RouterProps> = ({ component: Component, restricted = false, ...rest }) => (
    <Route {...rest} render={() => (session && restricted ? <Redirect to="/" /> : <Component />)} />
)

export default PublicRoute
