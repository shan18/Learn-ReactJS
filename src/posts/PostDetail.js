import React, { Component } from 'react'

class PostDetail extends Component {
  constructor (props) {
    super(props)
    this.titleWasClicked = this.titleWasClicked.bind(this)
    this.toggleContent = this.toggleContent.bind(this)
    this.handleRemoveContentButton = this.handleRemoveContentButton.bind(this)
    this.state = {
      showContent: true,
      postItem: null
    }
  }

  titleWasClicked (event) {
    event.preventDefault()
    const { dataCallback } = this.props

    // with this, we need to specify only the values we need to change unlike the previous method
    let newPostItem = this.props.post
    newPostItem['title'] = 'This is my new title'

    this.setState({
      postItem: newPostItem // cange the title of the post on click
    })

    if (dataCallback !== undefined) {
      dataCallback(newPostItem)
    }
  }

  toggleContent (event) {
    event.preventDefault()
    this.setState({
      showContent: !this.state.showContent
    })
  }

  handleRemoveContentButton (event) {
    if (this.props.didHandleRemove) { // check whether it is defined
      this.props.didHandleRemove(this.props.post)
      // OR
      // this.props.didHandleRemove(this.state.postItem)
    }
  }

  setPostStateOnProps () {
    const { post } = this.props
    this.setState({
      postItem: post
    })
  }

  // Invoked when the parent component has been updated
  componentDidUpdate (prevProps, prevState, snapshop) {
    if (this.props !== prevProps) {
      this.setPostStateOnProps()
    }
  }

  // Invoked immediately after a component is mounted (inserted into the tree)
  // It is called after the constructor
  componentDidMount () {
    this.setPostStateOnProps()
  }

  render () {
    const { postItem } = this.state
    const { showContent } = this.state
    return (
      <div>
        {postItem !== null ? <div>
          <h1 onClick={this.titleWasClicked}>{postItem.title}: {postItem.date}</h1>
          {showContent === true ? <p>{postItem.content}</p> : ''}
          <button onClick={this.toggleContent}>Toggle Content Display</button>
          <button onClick={this.handleRemoveContentButton}>Remove Content</button>
        </div>
          : ''}
      </div>
    )
  }
}

export default PostDetail
