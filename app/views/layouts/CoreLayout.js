import React, {PropTypes} from 'react'
import 'semantic-ui-css/semantic.css'
import '../../css/style.css'
import {Container} from 'semantic-ui-react'

export const CoreLayout = ({ children }) => (
  <Container className='app'>
    {children}
  </Container>
);

CoreLayout.propTypes = {
  children: PropTypes.element
}

export default CoreLayout;
