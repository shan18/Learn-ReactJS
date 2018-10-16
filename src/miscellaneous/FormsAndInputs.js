import React, { Component } from 'react'

class FormsAndInputs extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fullName: ''
    }
    this.inputFullNameRef = React.createRef()
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const data = this.state
    // console.log(this.inputFullNameRef.current.value) // gives the value of the input
    console.log(data)
  }

  handleInputChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  /*
   * One real usage of this manual focus is when a user submits a form incorrectly, then we show
   * him the exact place of error with this manual focus.
  */

 handleFocusClick = (event) => {
    this.inputFullNameRef.current.focus() // focus on this input as soon as the button is clicked
  }

  handleClearClick = (event) => {
    /* This clears out the data in the input field but it won't clear the input value in <p> above.
     * This is because it is not correlated to the state variable.
    */
    // this.inputFullNameRef.current.value = ''

    // To clear out the <p> along with input value, do the following
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
          <p><input ref={this.inputFullNameRef} type='text' placeholder='Your Name' value={fullName} name='fullName' onChange={this.handleInputChange} /></p>

          <p><button>Send Message</button></p>
          <p><button onClick={this.handleFocusClick}>Focus</button></p>
          <p><button onClick={this.handleClearClick}>Clear</button></p>
        </form>
      </div>
    )
  }
}

export default FormsAndInputs
