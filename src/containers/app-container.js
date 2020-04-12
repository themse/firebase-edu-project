import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { App } from '../components/app';
import { signInRequest, signOutRequest } from '../store/auth/thunks';

const mapStateToProps = ({ auth, users }) => ({ auth, users });
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            signIn: signInRequest,
            signOut: signOutRequest,
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(App);
