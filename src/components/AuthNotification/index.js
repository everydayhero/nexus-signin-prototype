import React from 'react'
import Button from 'hero-ui/buttons/Button'

import './style.scss'

export default ({ push }) => {
  return (
    <div className="AuthNotification">
      <div className="AuthNotification__content">
        <div className="AuthNotification__title">Connect to Blackbaud</div>
        <div className="AuthNotification__body">Sign in faster and easier by connecting your everydayhero account to Blackbaud. Not sure who Blackbaud is? <a href="#">Learn more here</a>.</div>
      </div>
      <div className="AuthNotification__actions">
        <Button
          label="Connect to Blackbaud"
          kind="secondary"
          onClick={push.bind(null, 'blackbaud-signin')} />
      </div>
    </div>
  )
}
