import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class StaticRouteComp extends Component {
  render () {
    return (
      <div>
        <h1>Content that doesn't change based on route.</h1>

        {/*
          * This works equivalent to the <a> tag but we use <Link> because it just renders out the particular component
            instead of reloading the entire page.
          * This will work only inside <BrowserRouter>
        */}
        <Link className='some-link' to='/posts/dynamic/'>Dynamic Page</Link>
      </div>
    )
  }
}

export default StaticRouteComp
