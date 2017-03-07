import React from 'react'
import Button from 'hero-ui/buttons/Button'
import Modal from '../Modal'

import illustration from './illustration.png'
import './style.scss'

export default ({ visible = false, router }) => {
  return (
    <Modal className='ConnectionSuccess' opened={visible} aboveTopBar={true}>
      <div className='ConnectionSuccess__content'>
        <img src={illustration} role="presentation" />
        <div className='ConnectionSuccess__heading'>
          Connection Successful
        </div>
        <div className='ConnectionSuccess__body'>
          Your everydayhero and Blackbaud accounts are now connected! From now on you can sign in to everydayhero with your Blackbaud email and password.
        </div>
        <Button
          kind="cta"
          label="Continue with Blackbaud"
          onClick={() => {}} />
      </div>
    </Modal>
  )
}
