import React, { PropTypes } from 'react';

function AppLayout ({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.element
}

export default AppLayout
