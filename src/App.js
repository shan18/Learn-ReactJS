import React, { Component } from 'react'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import DynamicRouteComp from './routingComps/DynamicRouteComp'
import StaticRouteComp from './routingComps/StaticRouteComp'
import NotFound from './routingComps/NotFound'

import './App.css'

class App extends Component {
  render () {
    const loggedIn = true
    const supportHistory = 'pushState' in window.history
    return (
      <div className='App'>
        <nav className='nav navbar-light bg-light'>
          <a className='navbar-brand' href='/'>Navbar</a>
        </nav>

        {/* All stuff within the BrowserRouter is dynamic i.e. it will change based on what the path is */}
        {/*
          Going back through the navigation history reloads the cached pages. 'forceRefresh' parameter automatically
          refreshes the pages if they are loaded from the navigation history.
        */}
        <BrowserRouter forceRefresh={!supportHistory}>
          <Switch> {/* It is like the switch conditional statement in other languages */}

            {/* exact specifies that the url will not work for anything else other than '/about' */}
            <Route exact path='/about' component={StaticRouteComp} />

            {/* This is a variable path i.e. it can take /posts/abc, /posts/dawd/ e.t.c. */}
            <Route path='/posts/:slug' component={DynamicRouteComp} />

            {/* This runs when the path does not match any of the cases */}
            <Route component={NotFound} />

            {/* Conditional Routing */}
            <Route exact path='/user' render={() => (
              loggedIn === true ? (
                <Redirect to='/posts/hello-there/' />
              ) : (
                <StaticRouteComp />
              )
            )} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
