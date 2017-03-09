import React from 'react'
import AuthNotification from '../../components/AuthNotification'
import Welcome from '../../components/Welcome'
import ConnectionSuccess from '../../components/ConnectionSuccess'

import './style.scss'

export default (props) => {
  const { query } = props.router.location
  const notBlackbaudUser = query && query.auth !== 'blackbaud'
  const isFirstTime = query && query.welcome === 'enabled'
  const bbClass = notBlackbaudUser ? '' : 'Dashboard--bb'

  return (
    <div className={ `Dashboard ${bbClass}` }>
      { notBlackbaudUser && <AuthNotification router={props.router} /> }
      <Welcome visible={isFirstTime} />
      <ConnectionSuccess
        visible={query && query.connection === 'enabled'}
        router={props.router}
        newEmail={query.newEmail} />
    </div>
  )
}
