import React from 'react'

import './style.scss'

export default ({visible = false, children}) => {
  return visible && (
    <div className="PageError">
      {children}
    </div>
  )
}
