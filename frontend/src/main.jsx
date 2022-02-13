import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ApolloClient, ApolloLink, InMemoryCache, ApolloProvider, from } from '@apollo/client';
import Context from './context/Context'
import { createUploadLink } from 'apollo-upload-client'



const activityMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token')
  const authorization = token ? `Bearer ${token}` : ''
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      'authorization': authorization
    }
  }))
  return forward(operation);
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  connectToDevTools: true,
  link: from([
    activityMiddleware,
    createUploadLink({
      uri: 'http://localhost:4000/graphql',
      fetch
    })
  ]),
  onError: err => {
    if (err) {
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  }
});


ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('root')
)
