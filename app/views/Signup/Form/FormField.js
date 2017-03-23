import React, { PropTypes } from 'react'

class FormField extends React.Component {
  static propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    componentClass: PropTypes.string,
    children: PropTypes.object,
    meta: PropTypes.object
  }

  render () {
    const {
      input,
      label,
      type,
      componentClass,
      children,
      meta: {
        touched,
        error,
        submitFailed
      }
    } = this.props;

    const validationState = (submitFailed && error) || (touched && error) ? 'error' : null;
    return (
      <FormGroup validationState={validationState}>
        <FormControl
          {...input}
          type={type || 'text'}
          componentClass={componentClass || 'input'}
          placeholder={label}
          >
          {children}
        </FormControl>

        {validationState && <HelpBlock><Glyphicon glyph="exclamation-sign" /> {error}</HelpBlock>}
      </FormGroup>
    )
  }
}

export default FormField
