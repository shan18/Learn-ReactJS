import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class DynamicRouteComp extends Component {
  componentDidMount () {
    const { slug } = this.props.match.params

    // this.performLookup(slug) // api call

    /*
     * This runs when the slug we called is not found in out api and so we want to redirect he user to someplace else
    */

    // const { history } = this.props
    // const supportHistory = 'pushState' in window.history
    // if (supportHistory) {
    //   history.pushState(null, '/not-found') // if the browser supports the new javascript version
    // } else {
    //   window.location = '/dashboard' // for browers using the older version of javascript
    // }
  }

  render () {
    const { slug } = this.props.match.params
    return (
      <div>
        <h1>{slug} that changes based on route</h1>
        <Link className='some-link' to='/about/'>Static Page</Link>
      </div>
    )
  }
}

export default DynamicRouteComp
