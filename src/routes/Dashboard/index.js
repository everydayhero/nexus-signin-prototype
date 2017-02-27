import React from 'react'
import AuthNotification from '../../components/AuthNotification'

import './style.scss'

export default (props) => {
  const { query } = props.router.location
  const notBlackbaudUser = query && query.auth !== 'blackbaud'
  const bbClass = notBlackbaudUser ? '' : 'Dashboard--bb'

  return (
    <div className={ `Dashboard ${bbClass}` }>
      { notBlackbaudUser && <AuthNotification router={props.router} /> }
    </div>
  )
}
