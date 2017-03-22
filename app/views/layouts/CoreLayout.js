import React, {PropTypes} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export const CoreLayout = ({ children }) => (
  <MuiThemeProvider>
    {children}
  </MuiThemeProvider>
);

CoreLayout.propTypes = {
  children: PropTypes.element
}

export default CoreLayout;
