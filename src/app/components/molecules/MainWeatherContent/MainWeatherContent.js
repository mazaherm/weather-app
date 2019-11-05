import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import Heading from '../../atoms/Heading'
import Paragraph from '../../atoms/Paragraph'
import Image from '../../atoms/Image'
import Grid from '../../layout/Grid'

import './MainWeatherContent.scss'

export default class MainWeatherContent extends Component {

  static propTypes = {
    city: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    icon: PropTypes.string,
    temperature: PropTypes.number
  }
  render () {
    const { data } = this.props
    return (
      <Grid styles='weather-card-main'>
        <Grid styles='wc-top'>
          <Grid>
            <Heading styles='wc-heading' size={2}>{data.city}</Heading>
            <Paragraph styles='wc-description'>{data.description}</Paragraph>
          </Grid>
          <Grid>
            <Paragraph styles='wc-date'>{moment(data.date * 1000).format('MMM Do YYYY')}</Paragraph>
          </Grid>
        </Grid>
        <Grid styles='wc-main'>
          <Grid styles='wc-main-weather-icon'>
            <Image width='75px' src={data.icon} alt='todays weather' />
          </Grid>
          <Grid styles='wc-main-temperature'>
            <Paragraph styles='wc-temperature'>{Math.round(data.temperature)}<span>&#176; C</span></Paragraph>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
