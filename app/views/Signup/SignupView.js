import React, { Component, PropTypes} from 'react';
import SignupForm from './Form/SignupForm'
import Paper from 'material-ui/Paper';
import Snackbar from 'material-ui/Snackbar'
// import {
//   isLoaded,
//   isEmpty
// } from 'react-redux-firebase'

class SignupView extends Component {
  static propTypes = {
    // firebase: PropTypes.object,
    authError: PropTypes.object
  }

  state = {
    snackCanOpen: false
  };

  /**
   * On submin form handler
   * @param {Object} values
   */
  submit = (user) => {
    console.log(user);
    this.openSnackbar();
    // const { createUser, login } = this.props.firebase;
    // createUser(user, {
    //   email: user.email,
    //   nickname: user.nickname
    // }).then(() => login(user));
  }

  /**
   * Close snackbar
   */
  closeSnackbar = () => this.setState({ snackCanOpen: false });

  /**
   * Open snackbar
   */
  openSnackbar = () => this.setState({ snackCanOpen: true });

  render () {
    const style = {
      paddingBottom: 25,
      width: '25%',
      display: 'inline-block'
    };
    const { snackCanOpen } = this.state;
    // const { authError } = this.props

    return (
      <div style={{textAlign: 'center', paddingTop: '10%'}}>
        <Paper style={style} zDepth={5}>
          <SignupForm
            onSubmit={this.submit}
          />
          <Snackbar
            open={/*isLoaded(authError) && !isEmpty(authError) &&*/ snackCanOpen}
            message='Signup error'
            autoHideDuration={9000}
            onRequestClose={this.closeSnackbar}
            action='CLOSE'
          />
        </Paper>

      </div>
    )
  }
}

export default SignupView;
