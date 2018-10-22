import React, { Component } from 'react'

// Check the docs: https://react-dropzone.netlify.com/

// DropZone is a <div> tag that will trigger a file upload and it is also
// a place where we can drop our files and it will handle them
import DropZone from 'react-dropzone'

const imageMaxSize = 10000000 // in bytes
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif'
const acceptedFileTypesArray = acceptedFileTypes.split(',').map((item) => {return item.trim()})

class ImgDropAndCrop extends Component {

  constructor (props) {
    super(props)
    this.state = {
      imgSrc: null
    }
  }

  verifyFile = (files) => {
    if (files && files.length > 0) {
      const currentFile = files[0] // 0 because we don't allow multiple files
      const currentFileType = currentFile.type
      const currentFileSize = currentFile.size
      if (!acceptedFileTypesArray.includes(currentFileType)) {
        alert('This file is not allowed. You can upload only images.')
        return false
      }
      if (currentFileSize > imageMaxSize) {
        alert('This file is not allowed. ' + currentFileSize + ' bytes is too large!')
        return false
      }
      return true
    }
  }

  handleOnDrop = (files, rejectedFiles) => {
    if (rejectedFiles && rejectedFiles.length > 0) {
      this.verifyFile(rejectedFiles)
    }

    // Sometimes there are some exceptions where we can bypass the constraints
    // For example: for image types, it will also accept '.psd' files
    // Thus we need to verify the accepted files as well
    if (files && files.length > 0) {
      if (this.verifyFile(files)) {
        /* imageBase64Data
         * Base64Data encodes the image as a part of the html and displays without
         * web browser having to download the image.
        */
        const currentFile = files[0]
        const reader = new FileReader() // for other types of files, we may need a different reader function
        reader.addEventListener('load', () => { // run this method when image is loaded
          // this function will store the result when the readAsDataURL() method is run below
          console.log(reader.result)
          this.setState({
            imgSrc: reader.result
          })
        }, false)
        reader.readAsDataURL(currentFile) // read image in Base64 form
      }
    }
  }

  render () {
    const {imgSrc} = this.state
    return (
      <div>
        <h1>Drop and Crop</h1>
        {imgSrc !== null ? 
          <div>
            <h3>Your uploaded image:</h3>
            <img src={imgSrc} alt='dropzone' />
          </div> : <DropZone onDrop={this.handleOnDrop} multiple={false} accept={acceptedFileTypes} maxSize={imageMaxSize}>
            Drop image here or click to upload
          </DropZone>}
      </div>
    )
  }
}

export default ImgDropAndCrop
