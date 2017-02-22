import React from 'react'
import Modal from '../Modal'
import AnimatedHeart from '../AnimatedHeart'

import './style.scss'

export default React.createClass({
  displayName: 'FullPageLoader',
  propTypes: {
    visible: React.PropTypes.bool,
    title: React.PropTypes.string,
    subtitle: React.PropTypes.string
  },

  getDefaultProps () {
    return {
      visible: false,
      title: null,
      subtitle: null
    }
  },

  renderSubtitle () {
    if (this.props.subtitle) {
      return (
        <div className='FullPageLoader__loading-subtitle'>
          { this.props.subtitle }
        </div>
      )
    }
  },

  render () {
    return (
      <Modal className='FullPageLoader' opened={this.props.visible} aboveTopBar={false}>
        <div className='FullPageLoader__Wrapper'>
          <AnimatedHeart />
          <div className='FullPageLoader__loading-title'>
            { this.props.title }
          </div>
          { this.renderSubtitle() }
        </div>
      </Modal>
    )
  }
})
