import React, { Component } from 'react'

// Alternate of the method used below
//
// class ParentWrapper extends Component {
//   render () {
//     const { alertType } = this.props
//     return (
//       <div className={'alert alert-' + alertType}>{this.props.children}</div>
//     )
//   }
// }

// The main function need not be same as the file name in the lastet version of javascript

function AlertBox (props) {
  return (
    // The property '.children' will take the content from the children functions
    <div className={'alert alert-' + props.alertType}>{props.children}</div>
  )
}

function WelcomeHereDialog () {
  return <AlertBox alertType='success'><h1>new content.</h1></AlertBox>
}

// Inherit data of a function into a class
//
class SubItem extends Component {
  render () {
    return (
      <AlertBox alertType='success'><h1>class content.</h1></AlertBox>
    )
  }
}

export { AlertBox, SubItem }
export default WelcomeHereDialog
