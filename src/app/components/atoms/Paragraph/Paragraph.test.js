import React from 'react'
import { shallow } from 'enzyme'
import Paragraph from './Paragraph'

describe('<Paragraph />', () => {
  it('should render without exploding', () => {
    const wrapper = shallow(<Paragraph>Random Text</Paragraph>)
    expect(wrapper.length).toEqual(1)
  })
})
