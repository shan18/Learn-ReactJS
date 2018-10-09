import React, { Component } from 'react'
import PostList from './posts/PostList'
// import ConstLetVar from './constletvar/ConstLetVar'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <PostList />
      </div>
    )
  }
}

export default App
