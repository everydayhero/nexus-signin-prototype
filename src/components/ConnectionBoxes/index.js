import React from 'react'
import Icon from 'hero-ui/atoms/Icon'

import './style.scss'

export default ({email}) => {
  return (
    <div className='ConnectionBoxes'>
      <div className='ConnectionBoxes__account'>
        <div className='ConnectionBoxes__label'>
          Your Blackbaud Account
        </div>
        <div className='ConnectionBoxes__name'>
          {email}
        </div>
      </div>
      <Icon icon="arrow-right" className="ConnectionBoxes__arrow" />
      <div className='ConnectionBoxes__account'>
        <div className='ConnectionBoxes__label'>
          everydayhero organisation
        </div>
        <div className='ConnectionBoxes__name'>
          World Puppy Foundation
        </div>
      </div>
    </div>
  )
}
