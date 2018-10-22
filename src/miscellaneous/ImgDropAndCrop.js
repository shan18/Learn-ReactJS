import React, { Component } from 'react'

/* Check the docs:
 * 1. https://react-dropzone.netlify.com/ (React Dropzone)
 * 2. https://github.com/DominicTobias/react-image-crop (React Image Crop)
*/

import DropZone from 'react-dropzone'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css';

const imageMaxSize = 10000000 // in bytes
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif'
const acceptedFileTypesArray = acceptedFileTypes.split(',').map((item) => {return item.trim()})

class ImgDropAndCrop extends Component {

  constructor (props) {
    super(props)
    this.state = {
      imgSrc: null,
      crop: { // see docs for other options
        aspect: 1/1
      }
    }
  }

  verifyFile = (files) => {
    if (files && files.length > 0) {
      const currentFile = files[0]
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

    if (files && files.length > 0) {
      if (this.verifyFile(files)) {
        // imageBase64Data
        const currentFile = files[0]
        const reader = new FileReader()
        reader.addEventListener('load', () => {
          this.setState({
            imgSrc: reader.result
          })
        }, false)
        reader.readAsDataURL(currentFile)
      }
    }
  }

  handleImageLoaded = (image) => {
    console.log(image)
  }

  handleOnCropChange = (crop) => {
    console.log(crop)
    this.setState({crop}) // see docs
    console.log(this.state)
  }

  handleOnCropComplete = (crop, pixelCrop) => {
    console.log(crop, pixelCrop)
  }

  render () {
    const {imgSrc} = this.state
    return (
      <div>
        <h1>Drop and Crop</h1>
        {imgSrc !== null ? 
          <div>
            <ReactCrop
              src={imgSrc} // This necessarily does not have to be a uploaded image. It can be any external image.
              crop={this.state.crop}
              onImageLoaded={this.onImageLoaded}
              onComplete={this.handleOnCropComplete}
              onChange={this.handleOnCropChange}
            />
          </div> : <DropZone onDrop={this.handleOnDrop} multiple={false} accept={acceptedFileTypes} maxSize={imageMaxSize}>
            Drop image here or click to upload
          </DropZone>}
      </div>
    )
  }
}

export default ImgDropAndCrop
