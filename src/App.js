import React, { Component } from 'react'
import Footer from 'hero-ui/layout/Footer'
import MenuBar from './components/MenuBar'

import 'hero-ui/assets.scss'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className="App">
        <MenuBar />

        { this.props.children }

        <Footer region="us" imagePath="https://qludn19a1ws1wby8q1l5qshc-wpengine.netdna-ssl.com/us/wp-content/themes/edh-portal-2014/assets/img/edh-logo.png?1395271134" />
      </div>
    )
  }
}

export default App
