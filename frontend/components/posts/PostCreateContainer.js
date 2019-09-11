import { connect } from 'react-redux';
import { createPost, fetchWallPosts, fetchFeed } from '../../actions/post';
import PostForm from './PostForm';

const mapStateToProps = (
  { session: { currentUser } },
  { postAuthorId, author, wall }
) => {
    return ({
    currentUser,
    post: { body: '' },
    postAuthorId,
    author,
    wall,
    formType: 'Make Post',
    message: 'Post',
    close: () => {},
    isFriend: "IMPLEMENT SOON"
  })
}

const mapDispatchToProps = dispatch => ({
  action: post => dispatch(createPost(post)),
  fetchPosts: id => dispatch(fetchWallPosts(id)),
  fetchFeed: id => dispatch(fetchFeed(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
