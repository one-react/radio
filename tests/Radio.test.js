import React from 'react'
import { mount } from 'enzyme'

import Radio from '../src/Radio'

const wrapper = mount(<Radio>male</Radio>)

describe('src/index', () => {
  it('should return a string', () => {
    expect(wrapper.find('div').length).toBe(1)
    expect(wrapper.find('.or-radio').length).toBe(1)
  })
})
