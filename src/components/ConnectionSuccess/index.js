import React, { Component } from 'react'
import Button from 'hero-ui/buttons/Button'
import Checkbox from 'hero-ui/forms/Checkbox'
import Modal from '../Modal'

import illustration from './illustration.png'
import './style.scss'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: false
    }

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
  }

  handleCheckboxChange () {
    const { checked } = this.state

    this.setState({ checked: !checked })
  }

  renderSuccess () {
    return (
      <div>
        <div className='ConnectionSuccess__heading'>
          Connection Successful
        </div>
        <div className='ConnectionSuccess__body'>
          Your everydayhero and Blackbaud accounts are now connected! From now on you will sign in to everydayhero via Blackbaud.
        </div>
        <div className="ConnectionSuccess__buttons">
          <Button
            kind="cta"
            label="Continue"
            onClick={() => {}} />
        </div>
      </div>
    )
  }

  renderConfirm () {
    const { router } = this.props

    return (
      <div>
        <div className='ConnectionSuccess__heading'>
          Confirm Account Connection
        </div>
        <div className='ConnectionSuccess__body'>
          You're one step away from being able to sign in to everydayhero with your Blackbaud email and password. Confirm the following to continue:
        </div>
        <div className='ConnectionSuccess__ack'>
          <Checkbox
            value={this.state.checked}
            onChange={this.handleCheckboxChange} />
            <span onClick={this.handleCheckboxChange}>Next time I sign in I'll use <strong>{this.props.email}</strong></span>
        </div>
        <div className="ConnectionSuccess__buttons">
          <Button
            kind="cta"
            label="Continue"
            onClick={() => {}}
            disabled={!this.state.checked} />
          <Button
            kind="tertiary"
            borderless
            label="Go back, cancel connection"
            onClick={() => { router.goBack() }} />
        </div>
      </div>
    )
  }

  render () {
    const { visible, email } = this.props

    return (
      <Modal className='ConnectionSuccess' opened={visible} aboveTopBar={true}>
        <div className='ConnectionSuccess__content'>
          <img src={illustration} role="presentation" />
          { email ? this.renderConfirm() : this.renderSuccess() }
        </div>
      </Modal>
    )
  }
}
