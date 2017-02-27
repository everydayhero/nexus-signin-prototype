import React from 'react'
import Button from 'hero-ui/buttons/Button'

import './style.scss'

export default ({ router }) => {
  const { query } = router.location
  const email = query && query.email ? query.email : ''

  return (
    <div className="AuthNotification">
      <div className="AuthNotification__content">
        <div className="AuthNotification__title">Connect to Blackbaud</div>
        <div className="AuthNotification__body">Sign in faster and easier by connecting everydayhero to your Blackbaud account.</div>
      </div>
      <div className="AuthNotification__actions">
        <Button
          label="Connect to Blackbaud"
          kind="secondary"
          onClick={router.push.bind(null, `blackbaud-signin?email=${email}`)} />
      </div>
    </div>
  )
}
