import React, { Component } from 'react'

import WelcomeHereDialog, { AlertBox, SubItem } from './miscellaneous/ParentWrapper'

import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <AlertBox alertType='danger'>New Alert.</AlertBox>
        <SubItem alertType='info' />
        <WelcomeHereDialog />
      </div>
    )
  }
}

export default App
