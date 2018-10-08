import React, { Component } from 'react'

class PostDetail extends Component {
  constructor (props) {
    super(props)
    // this allows us to reference the 'this' keyword in function
    // if the constructor for a method is not defined then using 'this' within the method will throw an error
    this.titleWasClicked = this.titleWasClicked.bind(this)
  }

  titleWasClicked (event) { // defining a method
    event.preventDefault() // this can be used to prevent any default action like stop from submitting a form
    alert(this.props)
  }

  render () {
    const { post } = this.props
    // Alternate way of declaration:  const post = this.props.post
    return (
      <div>
        <h1 onClick={this.titleWasClicked}>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    )
  }
}

export default PostDetail
