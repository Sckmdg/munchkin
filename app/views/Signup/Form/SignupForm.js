import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar';
import TextInput from './TextInput';

class SignupForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  }

  render () {
    const { handleSubmit, submitting } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit} autoComplete='off'>
          <AppBar
            title='Sign Up'
            showMenuIconButton={false}
            zDepth={1}
          />
          <div>
            <Field
              name='nickname'
              component={TextInput}
              label='Nickname'
            />
          </div>
          <div>
            <Field
              name='email'
              component={TextInput}
              label='Email'
            />
          </div>
          <div>
            <Field
              name='password'
              component={TextInput}
              label='Password'
            />
          </div>
          <div>
            <RaisedButton
              label='Signup'
              primary
              type='submit'
              disabled={submitting}
            />
          </div>
        </form>
      </div>
    )
  }
}

/**
 * TODO add async validation
 * Validate form
 * @param {Object} values
 */
export const validate = (values) => {
  const errors = {};
  const requiredFields = [ 'nickname', 'email', 'password' ];

  /** Validate required field **/
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'is required'
    }
  });

  /** Validate email by regex pattern **/
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  return errors;
}

// Decorate the form component
const DecorateSignupForm = reduxForm({
  form: 'signup', // a unique name for this form,
  validate
})(SignupForm);

export default DecorateSignupForm;
