import React, { Component } from 'react'
import PostData from '../data/posts.json'

import PostDetail from './PostDetail'

class PostList extends Component {
  constructor (props) {
    super(props)
    this.handleDataCallback = this.handleDataCallback.bind(this)
    this.state = {
      postList: []
    }
  }

  handleDataCallback (postItem) { // this method handles the callback for the props
    const currentPostList = this.state.postList
    currentPostList.push(postItem) // adding the returned postItem to the current list of posts
    // currentPostList.pop(postItem) // This will remove the returned post from the list
    this.setState({
      postList: currentPostList
    })
  }

  componentDidMount () {
    this.setState({
      postList: PostData
    })
  }

  render () {
    const { postList } = this.state
    return (
      <div>
        <h1>Hello World</h1>
        {postList.map((item, index) => {
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
