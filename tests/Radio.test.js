import React from 'react'
import { mount, unmount } from 'enzyme'

import RadioGroup from '../src/RadioGroup'
import Radio from '../src/Radio'

const mockCallBack = jest.fn()
let wrapper
let wrapperHorizontal

describe('test for RadioGroup', () => {
  describe('normal radio group', () => {
    beforeEach(() => {
      wrapper = mount(
        createRadioGroup({
          name: 'fruits',
          defaultSelected: 'banana'
        })
      )
    })

    afterEach(() => {
      wrapper.unmount()
      mockCallBack.mockReset()
    })

    it('should render properly', () => {
      expect(wrapper.find('.or-radio-group').length).toBe(1)
      expect(wrapper.find('.or-radio').length).toBe(4)
      expect(wrapper.find('.or-radio').at(1).hasClass('or-radio-checked')).toBe(true)
    })

    it('simulates click events', () => {
      wrapper.find('.or-radio input').at(0).simulate('click');
      expect(mockCallBack.mock.calls.length).toBe(1)
      expect(wrapper.find('.or-radio').at(0).hasClass('or-radio-checked')).toBe(true)
    })

    it('simulates click on disabled radio', () => {
      wrapper.find('.or-radio input').at(3).simulate('click');
      expect(mockCallBack.mock.calls.length).toBe(0)
    })
  })

  describe('radio button group', () => {
    beforeEach(() => {
      wrapperHorizontal = mount(createRadioGroup({
        name: 'fruits',
        horizontal: true,
        defaultSelected: 'banana'
      }))
    })

    afterEach(() => {
      wrapper.unmount()
      mockCallBack.mockReset()
      wrapperHorizontal.unmount()
    })

    it('should render properly', () => {
      expect(wrapperHorizontal.find('.or-radio-group').hasClass('horizontal')).toBe(true)
    })
  })
})

function createRadioGroup (props) {
  return (
    <RadioGroup name='fruits' onChange={mockCallBack} {...props}>
      <Radio value='apple'>Apple</Radio>
      <Radio value='banana'>Banana</Radio>
      <Radio value='pear'>Pear</Radio>
      <Radio value='disa' disabled>disabled</Radio>
    </RadioGroup>
  )
}
