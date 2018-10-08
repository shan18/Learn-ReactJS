import React, { Component } from 'react'
import PostData from '../data/posts.json'

import PostDetail from './PostDetail'

class PostList extends Component {
  constructor (props) {
    super(props)
    this.handleDataCallback = this.handleDataCallback.bind(this)
  }

  handleDataCallback (txtMsg) { // this method handles the callback for the props
    alert(txtMsg)
    // console.log(this)
  }

  render () {
    return (
      <div>
        <h1>Hello World</h1>

        {PostData.map((item, index) => {
          return <PostDetail
            post={item}
            key={`post-list-key ${index}`}
            dataCallback={this.handleDataCallback} /> // callbacks are used to handle data returned from the props
        })}
      </div>
    )
  }
}

export default PostList
