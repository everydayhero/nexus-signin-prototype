import React, { Component } from 'react'
import randomTiming from '../../lib/randomTiming'

import loadingGif from './loading.gif'
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
    this.renderLoading = this.renderLoading.bind(this)
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
      this.props.router.push('dashboard?auth=blackbaud')
    }, randomTiming(2800, 3200))
  }

  renderLoading () {
    return (
      <div className="BlackbaudSignIn__loading">
        <img src={loadingGif} alt="loading" />
      </div>
    )
  }

  renderForm () {
    return (
      <form className="BlackbaudSignIn" onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={(e) => this.handleInputChange('emailValue', e)}
          value={this.state.emailValue}
          className="BlackbaudSignIn__email" />
        <input
          type="password"
          onChange={(e) => this.handleInputChange('passwordValue', e)}
          value={this.state.passwordValue}
          className="BlackbaudSignIn__password" />
        <button type="submit" className="BlackbaudSignIn__button">
          sign in
        </button>
      </form>
    )
  }

  render () {
    if (this.state.loading) {
      return this.renderLoading()
    } else {
      return this.renderForm()
    }
  }
}

export default BlackbaudSignIn
