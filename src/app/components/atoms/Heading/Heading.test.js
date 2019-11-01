import React from 'react'
import { shallow } from 'enzyme'
import Heading from './Heading'

describe('<Heading />', () => {
  it('should render without exploding', () => {
    const wrapper = shallow(<Heading size={1}>Random Text</Heading>)
    expect(wrapper.length).toEqual(1)
  })
})
