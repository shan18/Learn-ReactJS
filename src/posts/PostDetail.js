import React, { Component } from 'react'

class PostDetail extends Component {
  constructor (props) {
    super(props)
    this.titleWasClicked = this.titleWasClicked.bind(this)
    this.toggleContent = this.toggleContent.bind(this)
    this.state = {
      showContent: true,
      postItem: null
    }
  }

  titleWasClicked (event) {
    event.preventDefault()
    const { dataCallback } = this.props

    const newPostItem = {
      title: 'This is my new title',
      content: this.state.postItem.content
      // OR
      // content = this.props.post.content
    }
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

    // Alternate way of doing the above process
    //
    // const { showContent } = this.state
    // this.setState({
    //   showContent: !showContent
    // })
  }

  // Invoked immediately after a component is mounted (inserted into the tree)
  // It is called after the constructor
  componentDidMount () {
    const { post } = this.props
    this.setState({ // converting the prop to a state
      postItem: post
    })
  }

  render () {
    const { postItem } = this.state
    const { showContent } = this.state
    return (
      <div>
        {postItem !== null ? <div>
          <h1 onClick={this.titleWasClicked}>{postItem.title}</h1>
          {showContent === true ? <p>{postItem.content}</p> : ''}
          <button onClick={this.toggleContent}>Toggle Content Display</button>
        </div>
          : ''}
      </div>
    )
  }
}

export default PostDetail
