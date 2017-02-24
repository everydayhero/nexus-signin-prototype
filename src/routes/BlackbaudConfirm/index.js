import React, { Component } from 'react'
import BlackbaudLoading from '../../components/BlackbaudLoading'
import randomTiming from '../../lib/randomTiming'

import logo from './bb-logo.png'
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

    setTimeout(() => {
      this.props.router.push('dashboard?auth=blackbaud')
    }, randomTiming(2800, 3200))
  }

  handleDeny (e) {
    e.preventDefault()

    this.setState({ loading: true })

    setTimeout(() => {
      this.props.router.goBack()
    }, randomTiming(300, 1100))
  }

  renderForm () {
    return (
      <div className="BlackbaudConfirm">
        <img src={logo} alt="logo" />
        <div className="BlackbaudConfirm__content">
          <div className="BlackbaudConfirm__title">
            everydayhero would like to connect to your Blackbaud account
          </div>
          <div className="BlackbaudConfirm__email">
            {this.props.location.query.email}
          </div>
        </div>

        <button
          type="button"
          className="BlackbaudConfirm__button BlackbaudConfirm__button--allow"
          onClick={this.handleAllow}>
          Allow
        </button>
        <button
          type="button"
          className="BlackbaudConfirm__button BlackbaudConfirm__button--deny"
          onClick={this.handleDeny}>
          Deny
        </button>
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
