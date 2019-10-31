import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import WeatherCard from './components/organisms/WeatherCard/WeatherCard'

import '../style/main.scss'

class App extends Component {
  render() {
    return (
      <>
        <h1>This is a react app</h1>
        <WeatherCard />
      </>
    )
  }
}

const root = document.getElementById('root')
ReactDOM.render(<App />, root)
