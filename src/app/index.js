import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import WeatherCard from './components/organisms/WeatherCard/WeatherCard'
import Heading from './components/atoms/Heading'

import '../style/main.scss'

class App extends Component {
  render () {
    return (
      <>
        <Heading size={1} align='center'>React Weather App</Heading>
        <WeatherCard />
      </>
    )
  }
}

const root = document.getElementById('root')
ReactDOM.render(<App />, root)
