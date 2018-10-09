import React, { Component } from 'react'

class PostDetail extends Component {
  constructor (props) {
    super(props)
    this.titleWasClicked = this.titleWasClicked.bind(this)
    this.toggleContent = this.toggleContent.bind(this)
    this.state = {
      showContent: true
    }
  }

  titleWasClicked (event) {
    event.preventDefault()
    const { dataCallback } = this.props
    if (dataCallback !== undefined) {
      dataCallback('hello there!')
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

  render () {
    const { post } = this.props // Whenever using 'this' we need to define the variable in '{}'
    const { showContent } = this.state
    return (
      <div>
        <h1 onClick={this.titleWasClicked}>{post.title}</h1>

        {showContent === true ? <p>{post.content}</p> : ''}
        <button onClick={this.toggleContent}>Toggle Content Display</button>
      </div>
    )
  }
}

export default PostDetail
