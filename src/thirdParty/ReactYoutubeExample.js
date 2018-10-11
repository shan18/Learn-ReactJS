import React, { Component } from 'react'
import YouTube from 'react-youtube'

// https://youtu.be/_nBlN9yp9R8
// https://www.youtube.com/watch?v=_nBlN9yp9R8
// https://www.youtube.com/watch?v=_nBlN9yp9R8&index=11&list=PLEsfXFp6DpzQbwYDx1zgcKJ4tzyWFaESK
class ReactYoutubeExample extends Component {
  constructor (props) {
    super(props)
    this.videoOnReady = this.videoOnReady.bind(this)
    this.state = {
      playerObj: null
    }
  }

  videoOnReady (event) { // callback function
    // access to player in all event handlers via event.target
    const player = event.target
    this.setState({
      playerObj: player
    })
    event.target.mute() // mutes the video by default
    console.log(event.target) // will show the list of available options like 'mute' above
  }

  videoOnPlay (event) { // callback function
    console.log(event.target.getCurrentTime()) // will tell the time whenever we hit the play button
  }

  videoStateChange (event) {
    const player = event.target
    console.log(player.getCurrentTime()) // will tell time whenever video state changes
  }

  componentWillUnmount () { // will run when we are exiting the component
    const { playerObj } = this.state
    console.log(playerObj.getCurrentTime()) // to record at what time did the user stop watching
  }

  render () {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    }

    const { videoId } = this.props
    return (
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={this.videoOnReady}
        onPlay={this.videoOnPlay}
        onStateChange={this.videoStateChange}
      />
    )
  }
}

export default ReactYoutubeExample
