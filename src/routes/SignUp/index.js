import React from 'react'
import { Link } from 'react-router'
import Button from 'hero-ui/buttons/Button'

import lanyard from './lanyard.png'
import './style.scss'

export default (props) => {
  const query = props.location.query
  const email = (query && query.email) ? query.email : ''
  const signInForwardRoute = query && query.auth === `blackbaud-signedin` ? `confirm?email=${email}` : `blackbaud-signin?currentEmail=${email}`

  const signUpForwardRoute = query && query.auth === `blackbaud-signedin` ? `confirm?email=${email}` : `blackbaud-signup?currentEmail=${email}&welcome=enabled`

  return (
    <div className="SignUp">
      <img src={lanyard} role="presentation" />
      <div className="SignUp__content">
        Complete the activation of <strong>World Puppy Foundation</strong> by creating a user account with Blackbaud:
      </div>

      <Button
        kind="cta"
        label="Sign in with Blackbaud"
        onClick={() => { props.router.push(`/${signInForwardRoute}&welcome=enabled`) }} />

      <div className="SignUp__separator"><span>OR</span></div>

      <Link
        to={signUpForwardRoute}
        className="SignUp__signup">
        Create a new Blackbaud account
      </Link>
    </div>
  )
}
