import React, { Component } from 'react'

var variable1 = 'hello 1'
var variable2
var variable3

const variable4 = 'this is constant 1' // this cannot be defined again anywhere in this code

class ConstLetVar extends Component {
  constructor (props) { // constructors are the first things that are called in a class
    super(props)
    variable1 = 'hi 1' // this will override all references of 'variable1' within the class to use the local value
    variable2 = 'hi 2' // all references of 'variable2' will now use this value

    // available only to the constructor, will give error if used elsewhere without redefinition
    const variable5 = 'this is constant 2'

    let variable6 = 'hello 6' // conventionally let is used locally and var as a global

    if (variable6 === 'hello 6') {
      variable6 = 'hi 6'
    }

    console.log('In constructor')
    console.log(variable1)
    console.log(variable2)
    console.log(variable3) // this will give undefined
    console.log(variable4)
    console.log(variable5)
    console.log(variable6)
  }

  render () { // render is the last thing that is called in a class
    variable3 = 'hi 3' // this value will be available only to the references within this block
    console.log('In render')
    console.log(variable1)
    console.log(variable2)
    console.log(variable3)
    console.log(variable4)
    return (
      <h1>Hello World</h1>
    )
  }
}

export default ConstLetVar
