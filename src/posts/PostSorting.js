import React, { Component } from 'react'
import PostData from '../data/posts.json'

import PostDetail from './PostDetail'

class PostSorting extends Component {
  constructor (props) {
    super(props)
    this.toggleListReverse = this.toggleListReverse.bind(this)
    this.state = {
      postList: []
    }
  }

  toggleListReverse (event) {
    const { postList } = this.state
    const newPostList = postList.reverse()
    this.setState({
      postList: newPostList
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
        <button onClick={this.toggleListReverse}>Reverse Order</button>

        {/*
          This mapping is changing with every reorder so we need to define a method in the child component to
          handle this and display the updated data
        */}
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

export default PostSorting
