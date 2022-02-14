import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ApolloClient, ApolloLink, InMemoryCache, ApolloProvider, from, HttpLink } from '@apollo/client';
import Context from './context/Context'

const httpLink = new HttpLink({ uri: 'https://btg-nodejs-mongodb-graphql.herokuapp.com/graphql' });

// createUploadLink({
//   uri: 'http://localhost:4000/graphql',
//   fetch
// })

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
    httpLink
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
