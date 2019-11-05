import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

describe('<Button />', () => {
  it('should render without exploding', () => {
    const wrapper = shallow(<Button>Random Text</Button>)
    expect(wrapper.length).toEqual(1)
  })
})
