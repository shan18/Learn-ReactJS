import React, { Component } from 'react'

// import PostList from './posts/PostList'
// import ConstLetVar from './constletvar/ConstLetVar'
// import ReactYoutubeExample from './thirdParty/ReactYoutubeExample'
import ReactMarkdownExample from './thirdParty/ReactMarkdownExample'

import './App.css'

class App extends Component {
  render () {
    const input = '<h1>Hello World</h1>\n\n# This is a header\n\nAnd this is a paragraph'
    return (
      <div className='App'>
        {/* <ReactYoutubeExample videoId='_nBlN9yp9R8' /> */}

        {/* className is used so that we can reference this component somewhere else in the app */}
        <ReactMarkdownExample className='markdown' input={input} />
      </div>
    )
  }
}

export default App
