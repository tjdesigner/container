/* eslint-disable no-undef */
import React from 'react'
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider, NormalizedCacheObject } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
})

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('my-app-token')

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    }
})

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
})

const ApolloClientProvider: React.FC = ({ children }) => <ApolloProvider client={client}>{children}</ApolloProvider>

export default ApolloClientProvider
