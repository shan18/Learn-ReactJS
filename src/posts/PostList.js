import React, { Component } from 'react'
import PostData from '../data/posts.json' // import the json data with the name PostData

import PostDetail from './PostDetail'

class PostList extends Component {
  render () {
    return (
      <div>
        <h1>Hello World</h1>

        {PostData.map((item, index) => { // iterate through the data
          return <PostDetail post={item} key={`post-list-key ${index}`} /> // Calling a prop
        })}
      </div>
    )
  }
}

export default PostList
