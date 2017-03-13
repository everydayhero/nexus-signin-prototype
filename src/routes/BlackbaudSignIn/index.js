import React, { Component } from 'react'
import { Link } from 'react-router'
import BlackbaudLoading from '../../components/BlackbaudLoading'
import randomTiming from '../../lib/randomTiming'

import './style.scss'

class BlackbaudSignIn extends Component {
  constructor (props) {
    super(props)

    this.state = {
      emailValue: props.router.location.query.email || '',
      passwordValue: '',
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
        router.push(`dashboard?connection=enabled&newEmail=${emailValue}`)
        return
      }

      if (query.currentEmail) {
        router.push(`dashboard?connection=enabled&email=${emailValue}`)
        return
      }

      if (query.email && query.email !== emailValue) {
        router.push(`/?auth=blackbaud-signedout&emailError=${emailValue}`)
        return
      }

      router.push(`confirm?email=${emailValue}`)
    }, randomTiming(2800, 3200))
  }

  renderForm () {
    const { emailValue, passwordValue } = this.state
    const { currentEmail, welcome } = this.props.router.location.query

    return (
      <form className="BlackbaudSignIn" onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={(e) => this.handleInputChange('emailValue', e)}
          value={emailValue}
          className="BlackbaudSignIn__email" />
        <input
          type="password"
          onChange={(e) => this.handleInputChange('passwordValue', e)}
          value={passwordValue}
          className="BlackbaudSignIn__password" />
        <button type="submit" className="BlackbaudSignIn__button">
          sign in
        </button>
        <Link className="BlackbaudSignIn__create" to={ `blackbaud-signup?email=${emailValue}&currentEmail=${currentEmail}&welcome=${welcome}` }>
          Create an account
        </Link>
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

export default BlackbaudSignIn
