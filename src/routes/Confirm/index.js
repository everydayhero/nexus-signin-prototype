import React, { Component } from 'react'
import Icon from 'hero-ui/atoms/Icon'
import Button from 'hero-ui/buttons/Button'
import FullPageLoader from '../../components/FullPageLoader'
import randomTiming from '../../lib/randomTiming'

import illustration from './illustration.png'
import './style.scss'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      signinIn: false
    }
  }

  handleContinue () {
    this.setState({ signingIn: true })

    setTimeout(() => {
      this.props.router.push(`dashboard?auth=blackbaud&welcome=enabled`)
    }, randomTiming(1000, 1200))
  }

  render () {
    return (
      <div className="Confirm">
        <img src={illustration} role="presentation" />
        <div className='Confirm__heading'>
          Confirm Account Connection
        </div>
        <div className='Confirm__body'>
          You're one step away from being able to sign in to everydayhero with your Blackbaud email and password. Confirm the following to continue:
        </div>
        <div className='Confirm__accounts'>
          <div className='Confirm__account'>
            <div className='Confirm__label'>
              Your Blackbaud Account
            </div>
            <div className='Confirm__name'>
              {this.props.router.location.query.email || 'john.smith@example.com'}
            </div>
          </div>
          <Icon icon="arrow-right" className="Confirm__arrow" />
          <div className='Confirm__account'>
            <div className='Confirm__label'>
              everydayhero organisation
            </div>
            <div className='Confirm__name'>
              World Puppy Foundation
            </div>
          </div>
        </div>
        <div className="Confirm__buttons">
          <Button
            kind="cta"
            label="Continue"
            onClick={() => { this.handleContinue() }} />
          <Button
            kind="tertiary"
            borderless
            label="Sign in with a different account"
            onClick={() => { this.props.router.push(`blackbaud-signin?welcome=enabled`) }} />
        </div>
        <FullPageLoader
          visible={this.state.signingIn}
          title="Signing in"
          subtitle="This will only take a moment" />
      </div>
    )
  }
}
