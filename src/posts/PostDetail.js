import React, { Component } from 'react'

class PostDetail extends Component {
  constructor (props) {
    super(props)
    // this allows us to reference the 'this' keyword in function
    // if the constructor for a method is not defined then using 'this' within the method will throw an error
    this.titleWasClicked = this.titleWasClicked.bind(this)
  }

  titleWasClicked (event) {
    event.preventDefault()
    const { dataCallback } = this.props // We have to first define the callback before using it
    // console.log(dataCallback)
    if (dataCallback !== undefined) { // used when no such property is defined in the parent component
      dataCallback('hello there!')
    }
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
