import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import { About } from './components/About/About'
import { Home } from './components/Home/Home'
import { NavBar } from './components/NavBar/NavBar'
import { Posts } from './components/Posts/Posts'

export const App = () => {
  return (<>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={About} path="/about" />
        <Route component={Posts} path='/posts' />
        <Route component={Home} path="/" />
      </Switch>
    </BrowserRouter>
  </>)
}
