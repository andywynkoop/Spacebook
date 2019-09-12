import React, { Component } from 'react';
import { NULL_COVER, NULL_PROFILE } from '../../util/img_util';
import { updatePhoto } from '../../actions/photo';
import { connect } from 'react-redux';

class PhotoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: null,
      photoUrl: ""
    }
  }
  
  onSubmit(e) {
    e.preventDefault();
    const { photo } = this.state;
    if (photo === null) {
      return this.props.close()
    };
    const form = new FormData();
    const { type, id } = this.props;
    form.append(type, this.state.photo);
    this.props.submit(form, id);
    this.props.close();
  }

  handleChange(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ photoUrl: reader.result, photo: file });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ photoUrl: "", photo: null });
    }
  }
  
  close(e) {
    if (["cancel", "photo-form-modal"].includes(e.target.className)) {
      e.preventDefault();
      this.props.close();
    }
  }
  
  render() {
    const { photoUrl:url } = this.state;
    const { userPhoto, formType, defaultPhoto } = this.props;
    const photo = (userPhoto || defaultPhoto);
    const src = url === "" ? photo : url;
    const style = { background: `url(${src}) no-repeat` }
    return(
      <div className="photo-form-modal" onClick={this.close.bind(this)}>
        <form className="photo-form">
          <h2>{formType}</h2>
          <div className="photo-form-file">
            <input type="file" onChange={this.handleChange.bind(this)} />
            <figure style={style} />
          </div>
          <div className="photo-form-buttons">
            <button onClick={this.onSubmit.bind(this)}>Save</button>
            <button className="cancel">Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}

const mspPhoto = state => {
  const currentUser = state.entities.users[state.session.id]
  return ({
    type: "photo",
    formType: "Update Profile Picture",
    userPhoto: currentUser.profileImgUrl,
    default: NULL_PROFILE,
    id: currentUser.id
  });
}

const mspCover = state => {
  const currentUser = state.entities.users[state.session.id];
  return ({
  type: "cover",
  formType: "Update Cover Photo",
  userPhoto: currentUser.coverPhotoUrl,
  default: NULL_COVER,
  id: currentUser.id
});
}

const mdp = dispatch => ({
  submit: (form, id) => dispatch(updatePhoto(form, id))
})

export const ChangeProfilePhoto = connect(mspPhoto, mdp)(PhotoForm);
export const ChangeCoverPhoto = connect(mspCover, mdp)(PhotoForm);
