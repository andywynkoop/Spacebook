import React from 'react';
import { connect } from 'react-redux';
import { updatePost, fetchPost } from '../../actions/post';
import PostForm from './PostForm';

const mapStateToProps = (
  { session: { currentUser }, entities: { users } },
  { body, postAuthorId, author, wallId, close, id }
) => ({
  currentUser,
  post: { body: body },
  postAuthorId,
  author,
  wall: users[wallId],
  formType: 'Edit Post',
  message: 'Save',
  close: close,
  id,
  isFriend: true
});

const mapDispatchToProps = dispatch => ({
  action: post => dispatch(updatePost(post)),
  fetchPost: id => dispatch(fetchPost(id))
});

class EditForm extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.post)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
