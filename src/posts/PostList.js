import React, { Component } from 'react'
import PostData from '../data/posts.json' // import the json data with the name PostData

class PostList extends Component {
  render () {
    return (
      <div className='App'>
        <h1>Hello World</h1>

        {PostData.map((postDetail, index) => { // iterate through the data; postDetail is the iterated item
          return <div>
            <h1>{postDetail.title}</h1>
            <p>{postDetail.content}</p>
          </div>
        })}
      </div>
    )
  }
}

export default PostList
