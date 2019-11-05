import React, { Component } from 'react'
import CallWeatherAPI from '../../../services/CallWeatherAPI'

import Loading from '../../atoms/Loading'
import MainWeatherCardContent from '../../molecules/MainWeatherContent'
import ExtraWeatherCardContent from '../../molecules/ExtraWeatherContent'

import './WeatherCard.scss'

export default class WeatherCard extends Component {
  state = {
    city: null,
    description: null,
    icon: null,
    temperature: null,
    minTemp: null,
    maxTemp: null,
    windSpeed: null,
    sunrise: null,
    sunset: null,
    date: null,
    isLoading: true
  }

  componentDidMount () {
    const getData = async () => {
      const data = await CallWeatherAPI()
      this.setState({
        city: data.city.name,
        description: data.list[0].weather[0].description,
        icon: `http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`,
        temperature: data.list[0].main.temp,
        minTemp: data.list[0].main.temp_min,
        maxTemp: data.list[0].main.temp_max,
        windSpeed: data.list[0].wind.speed,
        sunrise: data.city.sunrise,
        sunset: data.city.sunset,
        date: data.list[0].dt,
        isLoading: false
      })
    }
    getData()
  }

  render () {
    return (
      <>
        {
          this.state.isLoading ? <Loading /> :
          <>
            <MainWeatherCardContent data={this.state}/>
            <ExtraWeatherCardContent data={this.state} />
          </>
        }
      </>
    )
  }
}
