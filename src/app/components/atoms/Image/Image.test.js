import React from 'react'
import { shallow } from 'enzyme'
import Image from './Image'

describe('<Image />', () => {
  it('should render without exploding', () => {
    const wrapper = shallow(<Image src='https://via.placeholder.com/150' alt='placeholder image'/>)
    expect(wrapper.length).toEqual(1)
  })
})
