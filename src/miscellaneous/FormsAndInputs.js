import React, { Component } from 'react'

class FormsAndInputs extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fullName: '',
      content: ''
    }
    this.inputFullNameRef = React.createRef()
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const data = this.state
    // console.log(this.inputFullNameRef.current.value) // gives the value of the input
    console.log(this.inputContentRef.value)
    console.log(data)
  }

  handleInputChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleFocusClick = (event) => {
    event.preventDefault()
    // we don't need the 'current' attribute because the inline ref is for a particular input and not generic
    this.inputContentRef.focus()
  }

  handleClearClick = (event) => {
    event.preventDefault()
    this.setState({
      fullName: ''
    })
  }

  // componentDidMount () {
  //   this.inputFullNameRef.current.focus() // focus on this input as soon as the component mounts
  // }

  render () {
    const { fullName } = this.state
    return (
      <div>
        <h1>Forms and Inputs</h1>
        <p>Full name is: {fullName}</p>
        <form onSubmit={this.handleSubmit}>

          {/* Creating a ref and defining it in the constructor */}
          <p><input ref={this.inputFullNameRef} type='text' placeholder='Your Name' value={fullName} name='fullName' onChange={this.handleInputChange} /></p>

          {/* Creating an inline ref */}
          <p><textarea ref={node => this.inputContentRef = node} placeholder='Your message' name='content' required={true} onChange={this.handleInputChange}></textarea></p>

          <p><button>Send Message</button></p>

          {/* The buttons below, go to the onSubmit function after executing their onClick functions.
          So we need to include event.preventDefault() in those onClick methods */}
          <p><button onClick={this.handleFocusClick}>Focus</button></p>
          <p><button onClick={this.handleClearClick}>Clear</button></p>
        </form>
      </div>
    )
  }
}

export default FormsAndInputs
