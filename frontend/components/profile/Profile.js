import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cover from './Cover';
import ProfileNav from './ProfileNav';
import ProfilePostsContainer from '../posts/ProfilePostsContainer';
import About from './About';
import Friends from '../friends/Friends';
import NavMain from '../NavMain';
import { fetchUser } from '../../actions/user';
import MissingPage from './MissingPage';
import { ChangeProfilePhoto, ChangeCoverPhoto } from './PhotoForm';
import { currentUser, friendsByUserId, userByUserUrl, shuffleAndTakeNine } from '../../util/selectors';

class Profile extends Component {
  state = {
    photoModal: false,
    friends: null
  }

  componentDidMount() {
    this.props.fetchUser()
  }

  componentDidUpdate(oldProps) {
    const { match, user, friends } = this.props;
    if (match.params.userUrl !== oldProps.match.params.userUrl) {
      this.props.fetchUser();
    }
    if(!this.state.friends && user) {
      this.setState({ friends: shuffleAndTakeNine(friends) })
    }
  }

  openModal = type => {
    if (this.props.currentUser.id !== this.props.user.id) {
      return () => this.setState({ photoModal: `view-${type}`});
    }
    return () => this.setState({ photoModal: type })
  }

  closeModal = () => this.setState({ photoModal: false })

  photoModal() {
    switch(this.state.photoModal) {
      case false:
        return null;
      case "photo":
        return <ChangeProfilePhoto close={this.closeModal} />;
      case "cover":
        return <ChangeCoverPhoto close={this.closeModal} />;
      case 'view-photo':
      case 'view-cover':
      default:
        return null;
    }
  }
  
  render() {
    const { user, currentUser, errors, count } = this.props;
    const { friends } = this.state;

    if (!user.id && errors.length === 0) return <NavMain />;
    if (!user.id) return <MissingPage />;

    return (
      <div>
        <NavMain />
        <div style={{ paddingTop: '42px' }}>
          <Cover cover={user.coverPhotoUrl} change={this.openModal('cover')} />
          <ProfileNav
            change={this.openModal('photo')}
            profile={user.profileImgUrl}
            name={`${user.firstname} ${user.lastname}`}
            user={user}
          />
          <div className="main-content">
            <aside className="profile-main-aside">
              <About user={user} />
              <Friends friends={friends} count={count} />
            </aside>
            <ProfilePostsContainer user={user} currentUser={currentUser} />
          </div>
          {this.photoModal()}
        </div>
      </div>
    );
  }
}

const msp = (state, props) => {
  const user = userByUserUrl(state, props.match.params.userUrl) || {};
  const friends = friendsByUserId(state, user.id);
  const count = Object.values(friends).length;
  return {
    currentUser: currentUser(state),
    user,
    errors: state.errors,
    friends,
    count
  };
};

const mdp = (dispatch, props) => ({
  fetchUser: () => dispatch(fetchUser(props.match.params.userUrl))
});

export default connect(msp, mdp)(Profile);
