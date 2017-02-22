import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './App'
import Dashboard from './routes/Dashboard'
import SignUpForm from './routes/SignUpForm'

render((
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ SignUpForm } />
        <Route path="/dashboard" component={ Dashboard } />
      </Route>
    </Router>
  ),
  document.getElementById('root')
)
