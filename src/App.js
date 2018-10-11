import React, { Component } from 'react'

// import PostList from './posts/PostList'
// import ConstLetVar from './constletvar/ConstLetVar'
import ReactYoutubeExample from './thirdParty/ReactYoutubeExample'

import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <ReactYoutubeExample videoId='_nBlN9yp9R8' />
      </div>
    )
  }
}

export default App
