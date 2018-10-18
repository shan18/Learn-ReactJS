import React, { Component } from 'react'

/*
 * We use this when we want to create only a single reusable input
*/
function MyTextInput (props) {
  function handleChange (event) {
    if (props.onChange) props.onChange(event)
  }
  return (
    <p>
      <input type='email' value={props.value} name={props.name} ref={props.inputRef} onChange={handleChange} />
    </p>
  )
}

/*
 * We use this when we want to create a bunch of reusable inputs
*/
class MyInputBlock extends Component {
  constructor (props) {
    super(props)
    this.textInput = null
    this.setTextInputRef = element => {
      this.textInput = element
    }
    this.focusTextInput = () => {
      if (this.textInput) this.textInput.focus()
    }
  }

  handleChange = (event) => {
    if(this.props.onChange) this.props.onChange(event)
  }

  componentDidMount () {
    this.focusTextInput()
  }
  
  render () {
    return (
      <div>
      <p><input ref={this.setTextInputRef} type='text' placeholder='Your Name' name={this.props.inputFullName} onChange={this.handleChange} /></p>
        <p><textarea placeholder='Your message' name={this.props.inputContentName} onChange={this.handleChange}></textarea></p>
      </div>
    )
  }
}

class FormsAndInputs extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fullName: '',
      content: '',
      email: ''
    }
    this.inputFullNameRef = React.createRef()
    this.inputEmailRef = React.createRef()
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
    this.inputEmailRef.current.focus()
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
    const { email } = this.state
    return (
      <div>
        <h1>Forms and Inputs</h1>
        <p>Full name is: {fullName}</p>
        <form onSubmit={this.handleSubmit}>
          <MyTextInput inputRef={this.inputEmailRef} value={email} name='email' onChange={this.handleInputChange} />

          {/* Since the props values and the state variable names are same, any change in input is refernecing the
          handleInputChange() method */}
          
          <MyInputBlock onChange={this.handleInputChange} inputFullName='fullName' inputContentName='content' />
          <p><button>Send Message</button></p>
          <p><button onClick={this.handleFocusClick}>Focus</button></p>
          <p><button onClick={this.handleClearClick}>Clear</button></p>
        </form>
      </div>
    )
  }
}

export default FormsAndInputs


{/* <p><input ref={this.inputFullNameRef} type='text' placeholder='Your Name' value={fullName} name='fullName' onChange={this.handleInputChange} /></p>
<p><textarea ref={node => this.inputContentRef = node} placeholder='Your message' name='content' required={true} onChange={this.handleInputChange}></textarea></p> */}
