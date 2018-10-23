import React, { Component } from 'react'

/* Check the docs:
 * 1. https://react-dropzone.netlify.com/ (React Dropzone)
 * 2. https://github.com/DominicTobias/react-image-crop (React Image Crop)
*/

import DropZone from 'react-dropzone'
import ReactCrop from 'react-image-crop'
import './custom-image-crop.css'

import {image64toCanvasRef, extractImageFileExtensionFromBase64, base64StringtoFile, downloadBase64File} from './ReusableUtils'

const imageMaxSize = 10000000 // in bytes
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif'
const acceptedFileTypesArray = acceptedFileTypes.split(',').map((item) => {return item.trim()})

class ImgDropAndCrop extends Component {

  constructor (props) {
    super(props)
    this.imagePreviewCanvasRef = React.createRef()
    this.state = {
      imgSrc: null,
      imgSrcExt: null,
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
          // console.log(reader.result)
          const myResult = reader.result;
          this.setState({
            imgSrc: myResult,
            imgSrcExt: extractImageFileExtensionFromBase64(myResult)
          })
        }, false)
        reader.readAsDataURL(currentFile)
      }
    }
  }

  handleImageLoaded = (image) => {
    // console.log(image)
  }

  handleOnCropChange = (crop) => {
    // console.log(crop)
    this.setState({crop}) // see docs
    // console.log(this.state)
  }

  handleOnCropComplete = (crop, pixelCrop) => {
    const canvasRef = this.imagePreviewCanvasRef.current
    const {imgSrc} = this.state
    image64toCanvasRef(canvasRef, imgSrc, pixelCrop)
  }

  handleDownloadClick = (event) => {
    event.preventDefault()
    const {imgSrc} = this.state
    if (imgSrc) { // this conditional block is redundant, see line 111
      const canvasRef = this.imagePreviewCanvasRef.current
      const {imgSrcExt} = this.state
      const canvasImgSrc = canvasRef.toDataURL('image/' + imgSrcExt)
      const myFileName = 'previewFile.' + imgSrcExt

      // file to be uploaded
      // if we want the file to be sent to our backend, then we can use this to send the file after conversion
      const myNewCroppedFile = base64StringtoFile(canvasImgSrc, myFileName)
      console.log(myNewCroppedFile)
      
      // download file
      downloadBase64File(canvasImgSrc, myFileName)
      this.handleClearToDefault()
    }
  }

  handleClearToDefault = (event) => {
    if (event) event.preventDefault()
    const canvas = this.imagePreviewCanvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    this.setState({
      imgSrc: null,
      imgSrcExt: null,
      crop: {
        aspect: 1/1
      }
    })
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
            <br />
            <p>Preview Canvas Crop</p>
            <canvas ref={this.imagePreviewCanvasRef}></canvas>
            <button onClick={this.handleDownloadClick}>Download</button>
            <button onClick={this.handleClearToDefault}>Clear</button>
          </div> : <DropZone onDrop={this.handleOnDrop} multiple={false} accept={acceptedFileTypes} maxSize={imageMaxSize}>
            Drop image here or click to upload
          </DropZone>}
      </div>
    )
  }
}

export default ImgDropAndCrop
