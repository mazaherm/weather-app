import React from 'react'
import { shallow } from 'enzyme'
import MainWeatherContent from './MainWeatherContent'

const sampleContent = {
  city: 'sample content'
}

describe('<MainWeatherContent />', () => {
  it('should render without exploding', () => {
    const wrapper = shallow(<MainWeatherContent data={sampleContent} />)
    expect(wrapper.length).toEqual(1)
  })
})
