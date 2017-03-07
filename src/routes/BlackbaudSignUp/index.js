import React, { Component } from 'react'
import BlackbaudLoading from '../../components/BlackbaudLoading'
import randomTiming from '../../lib/randomTiming'

import './style.scss'

class BlackbaudSignUp extends Component {
  constructor (props) {
    super(props)

    this.state = {
      emailValue: props.router.location.query.email || '',
      passwordValue: '',
      passwordConfirmValue: '',
      firstName: '',
      lastName: '',
      loading: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderForm = this.renderForm.bind(this)
  }

  handleInputChange (key, e) {
    this.setState({
      [key]: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()

    this.setState({ loading: true })

    setTimeout(() => {
      const { router } = this.props
      const { query } = router.location
      const { emailValue } = this.state

      if (query.currentEmail && query.currentEmail !== emailValue) {
        router.push(`blackbaud-confirm?currentEmail=${query.currentEmail}&email=${emailValue}`)
        return
      }

      if (query.email && query.email !== emailValue) {
        router.push(`/?auth=blackbaud-signedout&emailError=${emailValue}`)
        return
      }

      router.push(`dashboard?auth=blackbaud&welcome=${query.welcome}`)
    }, randomTiming(2800, 3200))
  }

  renderForm () {
    return (
      <form className="BlackbaudSignUp" onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={(e) => this.handleInputChange('emailValue', e)}
          value={this.state.emailValue}
          className="BlackbaudSignUp__email" />
        <input
          type="password"
          onChange={(e) => this.handleInputChange('passwordValue', e)}
          value={this.state.passwordValue}
          className="BlackbaudSignUp__password" />
        <input
          type="password"
          onChange={(e) => this.handleInputChange('passwordConfirmValue', e)}
          value={this.state.passwordConfirmValue}
          className="BlackbaudSignUp__passwordConfirm" />
        <input
          type="text"
          onChange={(e) => this.handleInputChange('firstName', e)}
          value={this.state.firstName}
          className="BlackbaudSignUp__firstName" />
        <input
          type="text"
          onChange={(e) => this.handleInputChange('lastName', e)}
          value={this.state.lastName}
          className="BlackbaudSignUp__lastName" />
        <button type="submit" className="BlackbaudSignUp__button">
          sign in
        </button>
      </form>
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

export default BlackbaudSignUp
