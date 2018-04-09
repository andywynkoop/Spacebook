import React, { Component } from 'react';
import { closeModal } from '../../actions/ui';
import { connect } from 'react-redux';

import FriendRequestModal from './FriendRequestModal';
import MessagesModal from './MessagesModal';
import NotificationModal from './NotificationModal';
import QuestionModal from './QuestionModal';
import NavDropdownModal from './NavDropdownModal';

class NavModal extends Component {
  constructor(props) {
    super(props);
    this.renderModal = this.renderModal.bind(this);
  }
  renderModal(type) {
    switch (type) {
      case 'friend':
        return <FriendRequestModal />;
      case 'message':
        return <MessagesModal />;
      case 'notification':
        return <NotificationModal />;
      case 'question':
        return <QuestionModal />;
      case 'dropdown':
        return <NavDropdownModal />;
      default:
        return <div>Unknown Modal Type</div>;
    }
  }
  render() {
    const { closeModal, type } = this.props;
    if (type === null) return <div />;
    return (
      <div onClick={closeModal} className="modal-main">
        <div className="modal-position-holder">{this.renderModal(type)}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ ui: { modal: { type } } }) => ({ type });

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});
export default connect(mapStateToProps, mapDispatchToProps)(NavModal);
