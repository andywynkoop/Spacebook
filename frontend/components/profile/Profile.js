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
import { fetchUser, fetchAllUsers } from '../../actions/user';
import { fetchCurrentUser } from '../../actions/session';
import MissingPage from './MissingPage';
import { ChangeProfilePhoto, ChangeCoverPhoto } from './PhotoForm';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.fetchUser = this.fetchUser.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      photoModal: false
    }
  }
  componentDidMount() {
    this.props.fetchAllUsers();
  }
  componentWillMount() {
    this.fetchUser();
    this.props.fetchCurrentUser();
  }
  componentWillUpdate() {
    if (!this.props.currentUser) this.props.history.push('/');
  }
  componentDidUpdate() {
    const { user, errors, currentUser } = this.props;
    if (!user && errors.length === 0) {
      this.fetchUser();
    }
    if (!currentUser) this.props.history.push('/');
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userUrl !== nextProps.match.params.userUrl) {
      this.props.fetchUser(nextProps.match.params.userUrl);
    }
  }
  fetchUser() {
    const { userUrl } = this.props.match.params;
    this.props.fetchUser(userUrl);
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
    const { user, currentUser, errors } = this.props;
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
              <Friends friends={user.friendshipData.friends} />
            </SidePanel>
            <ProfilePostsContainer user={user} currentUser={currentUser} />
          </MainPage>
          {this.photoModal()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (
  { session: { currentUser }, entities: { users, userIdMap }, errors },
  ownProps
) => {
  const id = userIdMap[ownProps.match.params.userUrl];
  return {
    currentUser,
    user: users[id],
    errors
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: userUrl => dispatch(fetchUser(userUrl)),
  fetchCurrentUser: () => dispatch(fetchCurrentUser()),
  fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
