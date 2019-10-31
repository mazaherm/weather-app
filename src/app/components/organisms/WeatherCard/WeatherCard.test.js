import React from 'react'
import { shallow } from 'enzyme'
import WeatherCard from './WeatherCard'

describe('<WeatherCard />', () => {
  it('should render without exploding', () => {
    const wrapper = shallow(<WeatherCard />)
    expect(wrapper.length).toEqual(1)
  })
})
