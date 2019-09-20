import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session';

const DemoModal = ({ loginUser }) => (
	<div className="demo-modal">
		<h1>
			Want to try the site before registering? Click below to sign in as
			one of the demo users:
		</h1>
		<p>
			Tip: to test out the live messenger, sign in as a different user in
			an incognito tab
		</p>
		<ul className="demo-users">
			{window.demoUsers.map(user => (
				<li
					key={user.id}
					onClick={() =>
						loginUser({ email: user.email, password: 'password' })
					}
				>
					<img src={user.profileImgUrl} />
					<p>{user.firstname}</p>
				</li>
			))}
		</ul>
	</div>
);

const mapDispatchToProps = dispatch => ({
	loginUser: user => dispatch(login(user)),
});

export default connect(
	null,
	mapDispatchToProps
)(DemoModal);
