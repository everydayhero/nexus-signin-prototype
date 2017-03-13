import React from 'react'
import Button from 'hero-ui/buttons/Button'

import './style.scss'

export default ({ router, hasActiveBBSession }) => {
  const { query } = router.location
  const email = query && query.email ? query.email : ''
  const forwardRoute = hasActiveBBSession ? `confirm?email=${email}` : `blackbaud-signin?currentEmail=${email}`

  return (
    <div className="AuthNotification">
      <div className="AuthNotification__content">
        <div className="AuthNotification__title">Sign in to everydayhero with Blackbaud</div>
        <div className="AuthNotification__body">Remember one less password and sign in faster by connecting everydayhero to your Blackbaud account.</div>
      </div>
      <div className="AuthNotification__actions">
        <Button
          label="Connect to Blackbaud"
          kind="cta"
          onClick={router.push.bind(null, forwardRoute)} />
      </div>
    </div>
  )
}
