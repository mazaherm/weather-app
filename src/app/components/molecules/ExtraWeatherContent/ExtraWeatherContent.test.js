import React from 'react'
import { shallow } from 'enzyme'
import ExtraWeatherContent from './ExtraWeatherContent'

const sampleContent = {
  city: 'sample content',
  windSpeed: 1,
  sunrise: 1572937220
}

describe('<ExtraWeatherContent />', () => {
  const wrapper = shallow(<ExtraWeatherContent data={sampleContent} />)
  it('should render without exploding', () => {
    expect(wrapper.length).toEqual(1)
  })
})
