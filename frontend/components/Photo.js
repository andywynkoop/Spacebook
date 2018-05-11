import React, { Component } from 'react';
import { addPhoto, getPhoto } from '../util/photo_api_util';

class Photo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageFile: null,
      imageCaption: null,
      imageUrl: null,
      pID: '',
      pURL: ''
    }
    this.updateFile = this.updateFile.bind(this)
    this.savePhoto = this.savePhoto.bind(this)
    this.previewImage = this.previewImage.bind(this)
  }
  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: "" });
    }
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }
  savePhoto(e) {
    e.preventDefault()
    
    const { imageFile, imageCaption } = this.state

    if (imageFile) {
      let data = new FormData();
      data.append("photo[image]", imageFile);
      data.append("photo[caption]", imageCaption);
      console.log(data);
      addPhoto(data);
    }
  }
  previewImage(e) {
    let pID = e.target.value
    this.setState({ pID })
    if (pID) {
      getPhoto(pID).then(pURL => {
        this.setState({ pURL })
      })
    } 
  }
  render() {
    return(
      <div className="photo-modal">
        <div className="photo-modal-form">
          <form onSubmit={this.savePhoto}>
            <h3>Upload a Photo</h3>
            <input type="file" onChange={this.updateFile}/>
            <input type="text" onChange={e => this.setState({ caption: e.target.value })}/>
            <button type="submit">Save</button>
          </form>
          <img src={this.state.imageUrl} />
        </div>
        <br/>
        <div>
          <h3>Test</h3>
          <input type="text" placeholder="photo ID" onChange={this.previewImage} value={this.state.pID}/>
          <img src={this.state.pURL} style={{height: '200px', width: '200px', objectFit: 'contain'}} />
        </div>
        
      </div>
    )
  }
}

export default Photo