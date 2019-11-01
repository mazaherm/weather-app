import React, { Component } from 'react'
import moment from 'moment'
import CallWeatherAPI from '../../../services/CallWeatherAPI'

import Heading from '../../atoms/Heading'
import Paragraph from '../../atoms/Paragraph'
import Image from '../../atoms/Image'

import './WeatherCard.scss'

export default class WeatherCard extends Component {
  state = {
    city: null,
    description: null,
    icon: null,
    temperature: null,
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
          this.state.isLoading ? <p>Loading...</p> :
          <div className='weather-card'>
            <Heading size={2}>{this.state.city}</Heading>
            <Paragraph>{this.state.description}</Paragraph>
            <Paragraph>{moment(this.state.date * 1000).format("MMM Do YYYY")}</Paragraph>
            <Image src={this.state.icon} alt='todays weather' />
            <Paragraph>{Math.round(this.state.temperature)}<span>&#176; C</span></Paragraph>
          </div>
        }
      </>
    )
  }
}
