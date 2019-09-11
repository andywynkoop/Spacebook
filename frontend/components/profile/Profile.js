import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Cover from './Cover';
import ProfileNav from './ProfileNav';
import MainPage from './MainPage';
import SidePanel from './SidePanel';
import ProfilePostsContainer from '../posts/ProfilePostsContainer';
import About from './About';
import Friends from '../friends/Friends';
import NavMain from '../NavMain';
import { fetchUser } from '../../actions/user';
import MissingPage from './MissingPage';
import { ChangeProfilePhoto, ChangeCoverPhoto } from './PhotoForm';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      photoModal: false
    }
  }
  componentDidMount() {
    this.props.fetchUser()
  }

  componentDidUpdate(oldProps) {
    if (this.props.match.params.userUrl !== oldProps.match.params.userUrl) {
      this.props.fetchUser();
    }
  }

  openModal(type) {
    if (this.props.currentUser.id !== this.props.user.id) {
      return () => this.setState({ photoModal: `view-${type}`});
    }
    return () => this.setState({ photoModal: type })
  }

  closeModal(e) {
    this.setState({ photoModal: false });
  }

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
    const { user, currentUser, errors, friends } = this.props;
    if (!user && errors.length === 0) return <NavMain />;
    if (!user) return <MissingPage />;

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
            currentUser={currentUser}
          />
          <MainPage>
            <SidePanel>
              <About user={user} />
              <Friends friends={friends} />
            </SidePanel>
            <ProfilePostsContainer user={user} currentUser={currentUser} />
          </MainPage>
          {this.photoModal()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { errors, session, entities } = state;
  const { id } = session;
  const { users, userFriendshipMap, userIdMap } = entities;
  const currentUser = users[id];
  const userId = userIdMap[props.match.params.userUrl];
  const user = users[userId];
  const userFriendIds = userFriendshipMap[userId] || [];
  const friends = (userFriendIds).map(id => users[id]);
  return {
    currentUser,
    user,
    errors,
    friends
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  fetchUser: () => dispatch(fetchUser(props.match.params.userUrl))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
