import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import TextInput from 'hero-ui/forms/TextInput'
import Button from 'hero-ui/buttons/Button'
import FullPageLoader from '../../components/FullPageLoader'
import randomTiming from '../../lib/randomTiming'

import './style.scss'

class SignInForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      emailValue: '',
      passwordValue: '',
      showPasswordEntry: false,
      loading: false,
      emailFieldErrors: [],
      emailDirty: false,
      signingIn: false
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.renderNextButton = this.renderNextButton.bind(this)
    this.renderPasswordEntry = this.renderPasswordEntry.bind(this)
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this)
    this.handleSignIn = this.handleSignIn.bind(this)
    this.fakeRequest = this.fakeRequest.bind(this)
    this.setDirty = this.setDirty.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  fakeRequest () {
    this.setState({ loading: true })

    setTimeout(() => {
      const { query } = this.props.router.location

      if (query && query.auth === 'blackbaud-signedin') {
        this.props.router.push(`blackbaud-confirm?email=${this.state.emailValue}`)
      } else if (query && query.auth === 'blackbaud-signedout') {
        this.props.router.push(`blackbaud-signin?email=${this.state.emailValue}`)
      } else {
        this.setState({
          showPasswordEntry: true,
          loading: false
        })
      }
    }, randomTiming(750, 1100))
  }

  setDirty () {
    this.setState({
      emailDirty: true
    })
  }

  handleEmailChange (value) {
    if (this.state.showPasswordEntry) {
      this.setState({ showPasswordEntry: false })
    }

    const validEmail = (email) => {
      const pattern = /\S+@\S+\.\S+/
      return pattern.test(email)
    }

    if (!validEmail(value)) {
      this.setState({ emailFieldErrors: ['Please enter a valid email address'] })
    } else {
      this.setState({ emailFieldErrors: [] })
    }

    this.setState({ emailValue: value })
  }

  handlePasswordChange (value) {
    this.setState({ passwordValue: value })
  }

  handleNextButtonClick () {
    this.fakeRequest()
  }

  handleSignIn () {
    this.setState({ signingIn: true })

    setTimeout(() => {
      this.props.router.push(`dashboard?email=${this.state.emailValue}`)
    }, randomTiming(2800, 3200))
  }

  handleSubmit (e) {
    const {
      emailValue,
      passwordValue,
      showPasswordEntry
    } = this.state

    e.preventDefault()

    if (emailValue && passwordValue && showPasswordEntry) {
      this.handleSignIn()
    } else {
      this.handleNextButtonClick()
    }
  }

  renderPasswordEntry () {
    const { showPasswordEntry, passwordValue } = this.state

    return showPasswordEntry && (
      <div className="PasswordEntry">
        <TextInput
          label="Your password"
          type="password"
          value={ passwordValue }
          onChange={ this.handlePasswordChange } />
        <Button
          kind="cta"
          label="Sign In"
          layout="full"
          onClick={this.handleSignIn}
          disabled={!passwordValue} />
        <a href="#" className="Link">
          Forgot your password?
        </a>
      </div>
    )
  }

  renderNextButton () {
    const {
      loading,
      emailValue,
      emailFieldErrors,
      emailDirty,
      showPasswordEntry
    } = this.state
    const label = loading ? 'Loading...' : 'Next'
    const disabled = loading || !emailValue || (emailDirty && !!emailFieldErrors.length)

    return !showPasswordEntry && (
      <div className="NextButton">
        <Button
          kind="cta"
          label={label}
          layout="full"
          onClick={this.handleNextButtonClick}
          disabled={disabled} />
        New here? <a href="#" className="Link">Register your nonprofit</a>
      </div>
    )
  }

  render () {
    const {
      emailValue,
      emailFieldErrors,
      emailDirty
    } = this.state

    return (
      <div className="SignInForm">
        <header className="SignInForm__header">
          <hgroup>
            <h1>Sign In</h1>
            <h2>Sign in to access your everydayhero account</h2>
          </hgroup>
        </header>

        <form className="SignInForm__body" onSubmit={this.handleSubmit}>
          <TextInput
            label="Your email address"
            value={ emailValue }
            onChange={ this.handleEmailChange }
            onBlur={ this.setDirty }
            errors={ emailDirty ? emailFieldErrors : [] } />

          <ReactCSSTransitionGroup
            transitionName="AnimatedNextButton"
            transitionEnterTimeout={600}
            transitionLeaveTimeout={200}>
            { this.renderNextButton() }
          </ReactCSSTransitionGroup>

          <ReactCSSTransitionGroup
            transitionName="AnimatedPasswordEntry"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={200}>
            { this.renderPasswordEntry() }
          </ReactCSSTransitionGroup>
        </form>
        <FullPageLoader
          visible={this.state.signingIn}
          title="Signing in"
          subtitle="This will only take a moment" />
      </div>
    )
  }
}

export default SignInForm
