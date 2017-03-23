import React, {PropTypes} from 'react'
import '../../css/style.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export const CoreLayout = ({ children }) => (
  <MuiThemeProvider>
    {children}
  </MuiThemeProvider>
);

CoreLayout.propTypes = {
  children: PropTypes.element
}

export default CoreLayout;
