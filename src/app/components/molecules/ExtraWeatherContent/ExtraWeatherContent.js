import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Heading from '../../atoms/Heading'
import Grid from '../../layout/Grid'

import './ExtraWeatherContent.scss'

export default class ExtraWeatherContent extends Component {

  static propTypes = {
    minTemp: PropTypes.number,
    maxTemp: PropTypes.number,
    windSpeed: PropTypes.number,
    sunrise: PropTypes.string,
    sunset: PropTypes.string
  }

  convertToMph (speed) {
    return (speed * 2.23694).toFixed(2)
  }

  getTime(timestamp) {
    // convert timestamp to date
    let date = new Date(timestamp * 1000)
    // get time from date
    const updateTime = k => k < 10 ? '0' + k : k
    let hr = date.getHours(), mins = date.getMinutes()
    return updateTime(hr) + ':' + updateTime(mins)
  }
  render () {
    const { data } = this.props
    return (
      <Grid styles='extra-weather-card'>
        <Heading size={5} styles='ewc-heading'>Min Temp: <span className='ewc-content'>{data.minTemp}&#176; C</span></Heading>
        <Heading size={5} styles='ewc-heading'>Max Temp: <span className='ewc-content'>{data.maxTemp}&#176; C</span></Heading>
        <Heading size={5} styles='ewc-heading'>Wind Speed: <span className='ewc-content'>{this.convertToMph(data.windSpeed)}mph</span></Heading>
        <Heading size={5} styles='ewc-heading'>Sunrise: <span className='ewc-content'>{this.getTime(data.sunrise)}</span></Heading>
        <Heading size={5} styles='ewc-heading'>Sunset: <span className='ewc-content'>{this.getTime(data.sunset)}</span></Heading>
      </Grid>
    )
  }
}