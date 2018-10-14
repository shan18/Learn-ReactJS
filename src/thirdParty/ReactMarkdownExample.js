import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

// Refer: https://github.com/rexxars/react-markdown

class ReactMarkdownExample extends Component {
  render () {
    const { input } = this.props // This makes the component reusable
    const disallowed = ['html']

    return (
      <ReactMarkdown source={input} disallowedTypes={disallowed} />
    )
  }
}

export default ReactMarkdownExample
