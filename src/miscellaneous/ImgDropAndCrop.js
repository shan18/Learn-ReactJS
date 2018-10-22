import React, { Component } from 'react'

// Check the docs: https://react-dropzone.netlify.com/

// DropZone is a <div> tag that will trigger a file upload and it is also
// a place where we can drop our files and it will handle them
import DropZone from 'react-dropzone'

const imageMaxSize = 10000 // in bytes

class ImgDropAndCrop extends Component {

  // Files not meeting the constraints will fall into the rejectedFiles array
  handleOnDrop = (files, rejectedFiles) => {
    console.log('accepted files are', files)
    console.log('rejected files are', rejectedFiles)

    if (rejectedFiles && rejectedFiles.length > 0) {
      const currentRejectFile = rejectedFiles[0]
      const currentRejectFileType = currentRejectFile.type
      const currentRejectFileSize = currentRejectFile.size
      if (!currentRejectFileType.startsWith('image/')) {
        alert('Invalid file type!')
      }
      else if (currentRejectFileSize > imageMaxSize) {
        alert('File is too big!')
      }
    }
  }

  render () {
    return (
      <div>
        <h1>Drop and Crop</h1>
        <DropZone onDrop={this.handleOnDrop} multiple={false} accept='image/*' maxSize={imageMaxSize}>Drop files here</DropZone>
      </div>
    )
  }
}

export default ImgDropAndCrop
