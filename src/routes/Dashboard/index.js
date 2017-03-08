import React from 'react'
import AuthNotification from '../../components/AuthNotification'
import Welcome from '../../components/Welcome'
import ConnectionSuccess from '../../components/ConnectionSuccess'

import './style.scss'

export default (props) => {
  const { query } = props.router.location
  const notBlackbaudUser = query && query.auth !== 'blackbaud'
  const isFirstTime = query && query.welcome === 'enabled'
  const isNewEmail = query && query.connection === 'enabled'
  const bbClass = notBlackbaudUser ? '' : 'Dashboard--bb'

  return (
    <div className={ `Dashboard ${bbClass}` }>
      { notBlackbaudUser && <AuthNotification router={props.router} /> }
      <Welcome visible={isFirstTime} />
      <ConnectionSuccess
        visible={isNewEmail}
        router={props.router}
        email={query.email} />
    </div>
  )
}
