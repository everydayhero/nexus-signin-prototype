import React, { Component } from 'react'
import Icon from 'hero-ui/atoms/Icon'
import BlackbaudLoading from '../../components/BlackbaudLoading'
import AccountBox from '../../components/AccountBox'
import randomTiming from '../../lib/randomTiming'

import './style.scss'

class BlackbaudConfirm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: false
    }

    this.handleAllow = this.handleAllow.bind(this)
    this.handleDeny = this.handleDeny.bind(this)
    this.renderForm = this.renderForm.bind(this)
  }

  handleAllow (e) {
    e.preventDefault()

    this.setState({ loading: true })

    const { router } = this.props
    const { query } = router.location
    const enableSuccess = query.currentEmail ? 'enabled' : ''

    setTimeout(() => {
      router.push(`dashboard?auth=blackbaud&welcome=${query.welcome}&connection=${enableSuccess}`)
    }, randomTiming(2800, 3200))
  }

  handleDeny (e) {
    e.preventDefault()

    this.setState({ loading: true })

    const { query } = this.props.router.location
    const currentEmail = query.currentEmail || ''

    console.log(currentEmail)

    setTimeout(() => {
      this.props.router.push(`blackbaud-signin?welcome=enabled&currentEmail=${currentEmail}`)
    }, randomTiming(300, 1100))
  }

  renderForm () {
    const { query } = this.props.router.location

    return (
      <div className="BlackbaudConfirm">
        <div className="BlackbaudConfirm__content">
          <div className="BlackbaudConfirm__title">
            Confirm your account
          </div>
          <div className="BlackbaudConfirm__subtitle">
            You are about to link these accounts:
          </div>
          <div className="BlackbaudConfirm__accounts">
            <AccountBox
              head={ query.currentEmail ? "everydayhero account" : "everydayhero organisation" }
              text={ query.currentEmail || "World Puppy Foundation" } />
            <Icon className="BlackbaudConfirm__icon" icon="link" />
            <AccountBox
              head="Blackbaud account"
              text={query.email} />
          </div>
        </div>
        <div className="BlackbaudConfirm__actions">
          <button
            type="button"
            className="BlackbaudConfirm__button BlackbaudConfirm__button--continue"
            onClick={this.handleAllow}>
            Continue
          </button>
          <button
            type="button"
            className="BlackbaudConfirm__button BlackbaudConfirm__button--back"
            onClick={this.handleDeny}>
            Log in with a different account
          </button>
        </div>
      </div>
    )
  }

  render () {
    if (this.state.loading) {
      return <BlackbaudLoading />
    } else {
      return this.renderForm()
    }
  }
}

export default BlackbaudConfirm
