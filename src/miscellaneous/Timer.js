import React, { Component } from 'react'

class Timer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render () {
    const { count } = this.state
    return (
      <div>
        <h1>Hello world: {count}</h1>
      </div>
    )
  }

  componentDidMount () {
    /*
     * This will be used when we have the initial count from another component.
     * Otherwise we should define the initial value in the constructor.
    */
    const { startCount } = this.props
    this.setState({
      // parseInt is needed when we are incrementing the value of count otherwise it does string addition
      count: parseInt(startCount)

      // In case of element subtraction we dont need parseInt
      // count: startCount
    })

    this.doIntervalChange()
  }

  doIntervalChange = () => {
    this.myInterval = setInterval(() => { // 1 sec interval
      this.setState(prevState => ({
        count: prevState.count + 1
      }))
      // OR
      /*
      this.setState({
        count: this.state.count + 1
      })
      */
    }, 1000) // count till 1000
  }

  componentWillUnmount () {
    clearInterval(this.myInterval) // get rid of interval after leaving the component
  }
}

export default Timer
