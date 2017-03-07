import React from 'react'

import './style.scss'

export default ({ head, text }) => {
  return (
    <div className="AccountBox">
      <div className="AccountBox__head">{ head }</div>
      <div className="AccountBox__body">
        <div className="AccountBox__text">{ text }</div>
      </div>
    </div>
  )
}
