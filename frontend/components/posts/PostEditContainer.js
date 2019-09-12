import React from 'react';
import { connect } from 'react-redux';
import { updatePost, fetchPost } from '../../actions/post';
import PostForm from './PostForm';
import { userByUserId, currentUser } from '../../util/selectors';

const msp = (
  state,
  { body, postAuthorId, author, wallId, close, id }
) => ({
  currentUser: currentUser(state),
  post: { body: body },
  postAuthorId,
  author,
  wall: userByUserId(state, wallId),
  formType: 'Edit Post',
  message: 'Save',
  close: close,
  id,
  isFriend: true
});

const mdp = dispatch => ({
  action: post => dispatch(updatePost(post)),
  fetchPost: id => dispatch(fetchPost(id))
});

class EditForm extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.post)
  }
}

export default connect(msp, mdp)(PostForm);
