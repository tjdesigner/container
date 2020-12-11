/* eslint-disable prettier/prettier */
import React from 'react'
import { RouteProps as ReactDOMRouterProps } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

interface RouteProps extends ReactDOMRouterProps {
    isPrivate?: boolean
    restricted?: boolean
    component: React.ComponentType
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, restricted = false, component: Component, ...rest }) => {
    if (isPrivate) {
        return <PrivateRoute component={Component} {...rest} />
    }

    if (restricted) {
        return <PublicRoute component={Component} restricted {...rest} />
    }

    return <PublicRoute component={Component} {...rest} />
}

export default Route
