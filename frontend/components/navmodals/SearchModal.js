import React from 'react';
import { connect } from 'react-redux';
import SearchModalUser from './SearchModalUser';
import { searchResults } from '../../util/selectors';

const SearchModal = ({ close, users }) =>
  <div onClick={close} className="modal-main">
    <div className="modal-position-holder">
      <div className="modal-box modal-box-search">
        {users.map(user => 
          <SearchModalUser 
            key={user.id} 
            user={user} 
          />)}
      </div>
    </div>
  </div>;


const msp = state => ({
  users: searchResults(state)
});

export default connect(msp)(SearchModal);
