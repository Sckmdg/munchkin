import React, {Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField'

class TextInput extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired
  }
  render () {
    const {
      meta: {
        touched, error
      },
      label,
      input
    } = this.props;
    return (
      <TextField hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
      />
    )
  }
}

export default TextInput;
