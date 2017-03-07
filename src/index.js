import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './App'
import Scenarios from './routes/Scenarios'
import Dashboard from './routes/Dashboard'
import SignInForm from './routes/SignInForm'
import SignUp from './routes/SignUp'
import SignUpEmail from './routes/SignUpEmail'
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
      <Route path="/signup-email" component={ SignUpEmail } />
      <Route path="/blackbaud-signin" component={ BlackbaudSignIn } />
      <Route path="/blackbaud-signup" component={ BlackbaudSignUp } />
      <Route path="/blackbaud-confirm" component={ BlackbaudConfirm } />
      <Route path="/scenarios" component={Scenarios} />
    </Router>
  ),
  document.getElementById('root')
)
