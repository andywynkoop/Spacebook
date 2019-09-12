import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchModalUser from './SearchModalUser';

class SearchModal extends Component {
  renderResultsList() {
    const { users, ui } = this.props;
    let query = ui.query.toLowerCase();
    let usersArr = Object.values(users);
    let results = usersArr.filter(
      user =>
        user.firstname.toLowerCase().includes(query) ||
        user.lastname.toLowerCase().includes(query)
    );
    return results
      .slice(0, 10)
      .map(user => <SearchModalUser key={user.id} user={user} />);
  }
  
  render() {
    const { ui, status, close } = this.props;
    if (!status || !ui) return <div />;
    return (
      <div onClick={close} className="modal-main">
        <div className="modal-position-holder">
          <div className="modal-box modal-box-search">
            {this.renderResultsList()}
          </div>
        </div>
      </div>
    );
  }
}

const msp = ({ ui }) => ({ ui });

export default connect(msp)(SearchModal);
