import { connect } from 'react-redux';
import { updatePost } from '../../actions/post';
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
  action: post => dispatch(updatePost(post))
});

export default connect(msp, mdp)(PostForm);
