import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './App'
import Dashboard from './routes/Dashboard'
import SignInForm from './routes/SignInForm'
import BlackbaudSignIn from './routes/BlackbaudSignIn'
import BlackbaudConfirm from './routes/BlackbaudConfirm'

render((
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ SignInForm } />
        <Route path="/dashboard" component={ Dashboard } />
      </Route>
      <Route path="/blackbaud-signin" component={ BlackbaudSignIn } />
      <Route path="/blackbaud-confirm" component={ BlackbaudConfirm } />
    </Router>
  ),
  document.getElementById('root')
)
