import React from 'react'
import { Link } from 'react-router'

import './style.scss'

export default ({ route, name, children }) => {
  return (
    <div className="Scenario">
      <div className="Scenario__name">
        <Link to={route}>{name}</Link>
      </div>
      <div className="Scenario__content">
        {children}
      </div>
    </div>
  )
}
