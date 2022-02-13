import React, { useContext } from 'react'
import { Router } from '@reach/router'
import './App.css'
import ContextUser, { Context } from './context/Context'
import Client from './pages/Client'
import Login from './pages/Login'
import Admin from './pages/Admin'
import { FETCH_USER } from './graphql/queries'
import { useQuery } from '@apollo/client';



function App() {

  const { setUser } = useContext(Context)

  const { data } = useQuery(FETCH_USER)
  if (data) {
    setUser(data.getUser)
  }

  return (
    <div className="App">
      <section>
        <ContextUser.Consumer>
          {
            ({ isAuth, users }) =>
              isAuth ?
                <>
                  {
                    console.log('Users', users)}
                  {
                    Object.keys(users).length &&
                    users.role === 'admin' &&
                    <Router>
                      <Admin path='/' />
                    </Router>
                  }
                  {
                    Object.keys(users).length &&
                    users.role === 'client' &&
                    <Router>
                      <Client path='/' />
                    </Router>
                  }
                </>
                :
                <Router>
                  <Login path='/' />
                </Router>
          }

        </ContextUser.Consumer>
      </section>
    </div>
  )
}

export default App
