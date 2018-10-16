import React, { Component } from 'react'

import Timer from './miscellaneous/Timer'

import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Timer startCount='100' />
      </div>
    )
  }
}

export default App
