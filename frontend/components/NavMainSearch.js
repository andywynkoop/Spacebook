import React, { Component } from 'react';
import SearchModal from './navmodals/SearchModal';
import { connect } from 'react-redux';
import { setQuery } from '../actions/ui';

class NavMainSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      modal: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  update(field) {
    return e => {
      let query = e.target.value;
      this.setState({ modal: true, query });
      this.props.setQuery(query);
    };
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  closeModal() {
    this.setState({ modal: false });
  }
  render() {
    return (
      <form className="nav-search" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.props.query}
          onChange={this.update('query')}
          placeholder="Search Users"
        />
        <button type="submit" className={this.state.modal ? 'blue-button' : ''}>
          <i className="fas fa-search" />
        </button>
        <SearchModal status={this.state.modal} close={this.closeModal} />
      </form>
    );
  }
}

const msp = ({ ui }) => ({ ui });

const mdp = dispatch => ({
  setQuery: query => dispatch(setQuery(query))
});

export default connect(msp, mdp)(NavMainSearch);
