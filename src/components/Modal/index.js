import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import classnames from 'classnames'

import './style.scss'

export default React.createClass({
  displayName: 'Modal',
  propTypes: {
    opened: React.PropTypes.bool,
    aboveTopBar: React.PropTypes.bool,
    className: React.PropTypes.string
  },

  getDefaultProps () {
    return {
      opened: false,
      aboveTopBar: true,
      className: ''
    }
  },

  componentDidMount () {
    this.ModalTarget = document.createElement('div')
    this.ModalTarget.className = this.getClassName(this.props)
    document.body.appendChild(this.ModalTarget)
    this.renderToCreatedNode()
  },

  componentWillUpdate (nextProps) {
    this.ModalTarget.className = this.getClassName(nextProps)
    this.renderToCreatedNode()
  },

  getClassName ({ opened, aboveTopBar }) {
    return classnames({
      'Modal': true,
      'Modal--opened': opened,
      'Modal--aboveTopBar': aboveTopBar
    })
  },

  componentWillUnmount () {
    unmountComponentAtNode(this.ModalTarget)
    document.body.removeChild(this.ModalTarget)
  },

  renderToCreatedNode () {
    render(
      <div className={this.props.className}>
        { this.props.children }
      </div>,
      this.ModalTarget
    )
  },

  render () {
    return <noscript />
  }
})
