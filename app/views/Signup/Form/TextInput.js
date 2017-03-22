import React, {Component} from 'react';
import TextField from 'material-ui/TextField'

class TextInput extends Component {
  render () {
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

export default TextField;
