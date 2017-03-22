import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

class SignupForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  }
  render () {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='firstName'>First Name</label>
          <Field name='firstName' component='input' type='text' />
        </div>
        <div>
          <label htmlFor='lastName'>Last Name</label>
          <Field name='lastName' component='input' type='text' />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <Field name='emai' component='input' type='email' />
        </div>
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

// Decorate the form component
const DecorateSignupForm = reduxForm({
  form: 'signup' // a unique name for this form
})(SignupForm);

export default DecorateSignupForm;
