import React, {Component} from 'react';
import SignupForm from './Form/SignupForm'
import Paper from 'material-ui/Paper';

class SignupView extends Component {
  render () {
    const style = {
      height: 400,
      width: '50%',
      margin: 20,
      textAlign: 'center',
      display: 'inline-block'
    };
    return (
      <div style={{textAlign: 'center'}}>
        <Paper style={style} zDepth={5}>
          <SignupForm />
        </Paper>
      </div>
    )
  }
}

export default SignupView;
