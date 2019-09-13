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
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      modal: false
    };

    this.update = this.update.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.search = this.search.bind(this).debounce(500);
  }

  search() {
    this.props.search(this.state.query);
  }
  
  update(e) {
    const query = e.target.value;
    const modal = query !== ""
    this.setState({ 
      modal, 
      query
    }, () => {
      if (modal) this.search();
    });
  };

  closeModal() {
    this.setState({ modal: false });
  }

  render() {
    return (
      <form className="nav-search">
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
    );
  }
}

const mdp = dispatch => ({
  search: query => dispatch(search(query))
});

export default connect(null, mdp)(NavMainSearch);
