import React from 'react'
import { shallow } from 'enzyme'
import Loading from './Loading'

describe('<Loading />', () => {
  it('should render without exploding', () => {
    const wrapper = shallow(<Loading />)
    expect(wrapper.length).toEqual(1)
  })
})
