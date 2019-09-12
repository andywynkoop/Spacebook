import { connect } from 'react-redux';
import { signup } from '../../actions/session';
import SignUp from './SignUp';
import { currentUser } from '../../util/selectors';

const msp = state => ({
  currentUser: currentUser(state),
  errors: state.errors
});

const mdp = dispatch => ({
  signup: user => dispatch(signup(user))
});

export default connect(msp, mdp)(SignUp);
