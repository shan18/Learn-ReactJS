import React, { Component } from 'react'

class FormsAndInputs extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fullName: null
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const data = this.state
    console.log(data)
  }

  handleInputChange = (event) => {
    event.preventDefault()
    // console.log(event)
    // console.log(event.target.name) // event.target denotes the input attribute
    // console.log(event.target.value)
    this.setState({
      // fullName: event.target.value // This will work only for that particular input with name 'fullName'
      [event.target.name]: event.target.value // This is generic and will work for all input tags
    })
  }

  // componentDidMount () {
  //   this.setState({
  //     fullName: 'Shan'
  //   })
  // }

  render () {
    const { fullName } = this.state
    return (
      <div>
        <h1>Forms and Inputs</h1>
        <p>Full name is: {fullName}</p>
        <form onSubmit={this.handleSubmit}>
          {/* 'onChange' attribute will call the function 'handleInputChange' whenever there is
            an update to the input field */}
          <p><input type='text' placeholder='Your Name' name='fullName' onChange={this.handleInputChange} /></p>

          {/* This will give a default value to the input, thus we can use componentDidMount() for
            giving the state variable its default value */}
          {/* <p>
            <input
              type='text' placeholder='Your Name' name='fullName' value={fullName} onChange={this.handleInputChange}
            />
          </p> */}
          <p><button>Send Message</button></p>
        </form>
      </div>
    )
  }
}

export default FormsAndInputs
