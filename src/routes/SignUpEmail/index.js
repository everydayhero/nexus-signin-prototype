import React from 'react'
import { Link } from 'react-router'

import './style.scss'

export default ({ router }) => {
  const query = router.location.query
  const email = query && query.email ? query.email : ''

  return (
    <div className="SignUpEmail">
      <div className="SignUpEmail__wrapper">
        <Link to={`signup?email=${email}`}>
          everydayhero nonprofit account
        </Link>
      </div>
    </div>
  )
}
