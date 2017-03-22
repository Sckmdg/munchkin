import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField'

class TextInput extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    meta: PropTypes.object.isRequired,
    input: PropTypes.object.isRequired,
    custom: PropTypes.object.isRequired
  }

  render () {
    const {
      meta: {
        touched,
        error
      }, 
      label,
      custom,
      input
    } = this.props;
    return (
      <TextField hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
      />
    )
  }
}

export default TextInput;
