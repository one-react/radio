import React from 'react'
import { mount } from 'enzyme'

import RadioGroup from '../src/RadioGroup'
import Radio from '../src/Radio'

const wrapper = mount(
  <RadioGroup name='fruits'>
    <Radio value='apple'>apple</Radio>
    <Radio value='banana'>banana</Radio>
    <Radio value='pear'>pear</Radio>
    <Radio value='dis' disabled>disabled</Radio>
  </RadioGroup>
)

describe('src/index', () => {
  it('should return a string', () => {
    expect(wrapper.find('.or-radio-group').length).toBe(1)
    expect(wrapper.find('.or-radio').length).toBe(4)

  })
})
