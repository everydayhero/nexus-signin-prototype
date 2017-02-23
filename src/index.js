import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './App'
import Dashboard from './routes/Dashboard'
import SignUpForm from './routes/SignUpForm'
import BlackbaudSignIn from './routes/BlackbaudSignIn'

render((
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ SignUpForm } />
        <Route path="/dashboard" component={ Dashboard } />
      </Route>
      <Route path="/blackbaud-signin" component={ BlackbaudSignIn } />
    </Router>
  ),
  document.getElementById('root')
)
