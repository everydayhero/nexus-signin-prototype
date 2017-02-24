import React from 'react'
import loadingGif from './loading.gif'

import './style.scss'

export default () => {
  return (
    <div className="BlackbaudLoading">
      <img src={loadingGif} alt="loading" />
    </div>
  )
}
