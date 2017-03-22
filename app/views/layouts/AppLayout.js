import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';

function AppLayout ({ children }) {
  const style = {
    height: 1000,
    width: '95%',
    margin: 20,
    textAlign: 'center',
    display: 'inline-block'
  };
  return (
    <Paper style={style} zDepth={5}>
      {children}
    </Paper>
  )
}

AppLayout.propTypes = {
  children: PropTypes.element
}

export default AppLayout
