import React, { Component } from 'react'
import PostData from '../data/posts.json'

import PostDetail from './PostDetail'

class PostList extends Component {
  constructor (props) {
    super(props)
    this.handleDataCallback = this.handleDataCallback.bind(this)
    this.handlePostRemove = this.handlePostRemove.bind(this)
    this.updateBackend = this.updateBackend.bind(this)
    this.state = {
      postList: []
    }
  }

  handleDataCallback (postItem) {
    let currentPostList = this.state.postList
    currentPostList.push(postItem) // adding the returned postItem to the current list of posts
    this.setState({
      postList: currentPostList
    })
  }

  updateBackend (currentPostList) {
    console.log('Updating...')
    this.setState({
      postList: currentPostList
    })
  }

  handlePostRemove (postItem) {
    let currentPostList = this.state.postList
    currentPostList.pop(postItem) // This will remove the topmost post from the list
    this.updateBackend(currentPostList)
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
            dataCallback={this.handleDataCallback}
            didHandleRemove={this.handlePostRemove} />
        })}
      </div>
    )
  }
}

export default PostList
