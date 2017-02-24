import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './App'
import Dashboard from './routes/Dashboard'
import SignInForm from './routes/SignInForm'
import SignUp from './routes/SignUp'
import BlackbaudSignIn from './routes/BlackbaudSignIn'
import BlackbaudSignUp from './routes/BlackbaudSignUp'
import BlackbaudConfirm from './routes/BlackbaudConfirm'

render((
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ SignInForm } />
        <Route path="/dashboard" component={ Dashboard } />
        <Route path="/signup" component={ SignUp } />
      </Route>
      <Route path="/blackbaud-signin" component={ BlackbaudSignIn } />
      <Route path="/blackbaud-signup" component={ BlackbaudSignUp } />
      <Route path="/blackbaud-confirm" component={ BlackbaudConfirm } />
    </Router>
  ),
  document.getElementById('root')
)
