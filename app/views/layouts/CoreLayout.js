import React, {PropTypes} from 'react'

export const CoreLayout = ({ children }) => (
  <div className='app'>
    {children}
  </div>
);

CoreLayout.propTypes = {
  children: PropTypes.element
}

export default CoreLayout;
