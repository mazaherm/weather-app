import React, { Component } from 'react'
import CallWeatherAPI from '../../../services/CallWeatherAPI'

import Loading from '../../atoms/Loading'
import Button from '../../atoms/Button'
import Grid from '../../layout/Grid'
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
    isLoading: true,
    extraIsDisplayed: false
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

    handleClick () {
      this.setState(
        prevState => ({
          extraIsDisplayed: !prevState.extraIsDisplayed
        })
      )
    }

  render () {
    return (
      <>
        {
          this.state.isLoading ? <Loading /> :
          <Grid styles='weather-card'>
            <MainWeatherCardContent data={this.state}/>
            <Button 
              onClick={() => this.handleClick()}
              styles='wc-button'
            >
                {!this.state.extraIsDisplayed ? 'More' : 'Less'}
            </Button>
            {
              !this.state.extraIsDisplayed ? null :
              <ExtraWeatherCardContent data={this.state} />
            }
          </Grid>
        }
      </>
    )
  }
}
