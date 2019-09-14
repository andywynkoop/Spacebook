import React, { Component } from 'react';
import SearchModal from './navmodals/SearchModal';
import { connect } from 'react-redux';
import { search } from '../actions/search';

Function.prototype.debounce = function(interval) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => this(...args), interval);
  }
}

class NavMainSearch extends Component {
  state = {
    query: '',
    modal: false
  };

  search = () => this.props.search(this.state.query)
  
  update = e => {
    const query = e.target.value;
    const modal = query !== ""
    this.setState({ 
      modal, 
      query
    }, () => {
      if (modal) this.search.debounce(500)();
    });
  };

  closeModal = () => this.setState({ modal: false })

  submit = e => {
    e.preventDefault();
    if (this.state.query !== "") this.search();
  }

  render = () =>
    <form className="nav-search" onSubmit={this.submit}>
      <input
        type="text"
        value={this.props.query}
        onChange={this.update}
        placeholder="Search Users"
      />
      <button type="submit" className={this.state.modal ? 'blue-button' : ''}>
        <i className="fas fa-search" />
      </button>
      {this.state.modal 
        ? <SearchModal close={this.closeModal} /> 
        : null
      }
    </form>
}

const mdp = dispatch => ({
  search: query => dispatch(search(query))
});

export default connect(null, mdp)(NavMainSearch);
