import React from 'react'

import './style.scss'

const nextStep = (query, push) => {
  return push({
    pathname: 'dashboard',
    query
  })
}


export default ({ router }) => {
  return (
    <div className="BlackbaudConfirmSignup">
      <div className="BlackbaudConfirmSignup__email">
        {router.location.query.email}
      </div>
      <button
        className="BlackbaudConfirmSignup__nextButton"
        onClick={() => { nextStep(router.location.query, router.push) }}>
        Continue to next step
      </button>
    </div>
  )
}
