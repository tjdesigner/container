/* eslint-disable react/button-has-type */
import React from 'react'

import { Theme, ThemeProvider } from 'theme-ui'
import theme from './theme'

import Routes from './router'

import ApolloClientProvider from './hooks/ApolloClientContainer'

const App = () => (
    <ThemeProvider theme={theme as Theme}>
        <ApolloClientProvider>
            <Routes />
        </ApolloClientProvider>
    </ThemeProvider>
)

export default App
