import React from 'react'
import { Link } from 'react-router'

import illustration from './illustration.png'
import './style.scss'

export default (props) => {
  const query = props.location.query
  const email = (query && query.email) ? query.email : ''

  return (
    <div className="SignUp">
      <img src={illustration} role="presentation" />
      <div className="SignUp__content">
        Complete the activation of <strong>World Puppy Foundation</strong> by creating a user account with Blackbaud:
      </div>

      <Link
        to={`/blackbaud-signin?email=${email}`}
        className="SignUp__signin">
        Sign in with Blackbaud
      </Link>

      <div className="SignUp__separator"><span>OR</span></div>

      <Link
        to="/blackbaud-signup"
        className="SignUp__signup">
        Create a new Blackbaud account
      </Link>
    </div>
  )
}
