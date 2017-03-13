import React from 'react'
import Button from 'hero-ui/buttons/Button'
import ConnectionBoxes from '../ConnectionBoxes'

import illustration from './illustration.png'
import './style.scss'

export default React.createClass({
  getInitialState () {
    return {
      isChecked: false
    }
  },

  handleInputChange() {
    this.setState({
      isChecked: !this.state.isChecked
    })
  },

  renderSuccess () {
    return (
      <div>
        <div className='ConnectionSuccess__heading'>
          Connection Successful
        </div>
        <div className='ConnectionSuccess__body'>
          Your everydayhero and Blackbaud accounts are now connected! From now on you will sign in to everydayhero via Blackbaud.
        </div>
        <ConnectionBoxes email={this.props.email} />
        <div className="ConnectionSuccess__buttons">
          <Button
            kind="cta"
            label="Continue"
            onClick={() => {}} />
          <Button
            kind="tertiary"
            borderless
            label="Go back, cancel connection"
            onClick={() => { this.props.router.goBack() }} />
        </div>
      </div>
    )
  },

  renderConfirm () {
    return (
      <div>
        <div className='ConnectionSuccess__heading'>
          Confirm Account Connection
        </div>
        <div className='ConnectionSuccess__body'>
          You're one step away from being able to sign in to everydayhero with your Blackbaud email and password. Confirm the following to continue:
        </div>
        <ConnectionBoxes email={this.props.newEmail} />
        <div className='ConnectionSuccess__ack'>
          <label htmlFor="checkbox">
            <input
              id="checkbox"
              type="checkbox"
              checked={this.state.isChecked}
              onChange={this.handleInputChange} />
            <span>Next time I sign in I'll use <strong>{this.props.newEmail}</strong></span>
          </label>
        </div>
        <div className="ConnectionSuccess__buttons">
          <Button
            kind="cta"
            label="Continue"
            onClick={() => {}}
            disabled={!this.state.isChecked} />
          <Button
            kind="tertiary"
            borderless
            label="Go back, cancel connection"
            onClick={() => { this.props.router.goBack() }} />
        </div>
      </div>
    )
  },

  render () {
    const { visible, newEmail } = this.props

    return (
      <div className={`ConnectionSuccess ${visible && 'ConnectionSuccess--visible'}`}>
        <div className='ConnectionSuccess__content'>
          <img src={illustration} role="presentation" />
          { newEmail ? this.renderConfirm() : this.renderSuccess() }
        </div>
      </div>
    )
  }
})
