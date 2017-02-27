import React from 'react'
import Modal from '../Modal'

import content from './content.png'
import './style.scss'

export default ({ visible = false }) => {
  return (
    <Modal className='Welcome' opened={visible} aboveTopBar={true}>
      <div className='Welcome__content'>
        <img src={content} role="presentation" />
      </div>
    </Modal>
  )
}
