import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchModalUser from './SearchModalUser';
import { searchResults } from '../../util/selectors';
import { withRouter } from 'react-router-dom';

class SearchModal extends Component {
	state = {
		selected: -1,
	};

	keyPressListener = e => {
		const { selected } = this.state;
		const { users } = this.props;
		if (e.key === 'ArrowDown' && selected < users.length - 1)
			this.setState({ selected: selected + 1 });
		if (e.key === 'ArrowUp' && selected > -1)
			this.setState({ selected: selected - 1 });
		if (e.key === 'Enter' && selected > -1)
			this.props.history.push(`/${users[selected].userUrl}`);
	};

	componentDidMount = () =>
		document.addEventListener('keydown', this.keyPressListener);

	componentWillUnmount = () =>
		document.removeEventListener('keydown', this.keyPressListener);

	render() {
		const { close, users } = this.props;
		const { selected } = this.state;
		return (
			<div onClick={close} className="modal-main">
				<div className="modal-position-holder">
					<div className="modal-box modal-box-search">
						{users.map((user, i) => (
							<SearchModalUser
								key={user.id}
								user={user}
								selected={i === selected}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}
}

const msp = state => ({
	users: searchResults(state),
});

export default connect(msp)(withRouter(SearchModal));
