import { mount } from 'enzyme'
import React from 'react'

import { Radio, RadioGroup } from '../src'

const mockCallBack = jest.fn()
let wrapper
describe('src/index', () => {
  describe('normal radio', () => {
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

    it('should render properly: type#default', () => {
      expect(wrapper.find('.or-radio-group').length).toBe(1)
      expect(wrapper.find('.or-radio').length).toBe(4)
      expect(
        wrapper
          .find('.or-radio')
          .at(1)
          .hasClass('or-radio-checked')
      ).toBe(true)
    })

    it('simulates click events', () => {
      wrapper
        .find('.or-radio input')
        .at(0)
        .simulate('click')
      expect(mockCallBack.mock.calls.length).toBe(1)
      expect(
        wrapper
          .find('.or-radio')
          .at(0)
          .hasClass('or-radio-checked')
      ).toBe(true)
    })

    it('simulates click on disabled radio', () => {
      wrapper
        .find('.or-radio input')
        .at(3)
        .simulate('click')
      expect(mockCallBack.mock.calls.length).toBe(0)
    })
  })

  describe('radio button', () => {
    beforeEach(() => {
      wrapper = mount(
        createRadioGroup({
          type: 'button',
          name: 'fruits',
          defaultSelected: 'banana'
        })
      )
    })

    afterEach(() => {
      wrapper.unmount()
      mockCallBack.mockReset()
    })

    it('should render properly: type#radio button', () => {
      expect(
        wrapper
          .find('.or-radio')
          .at(1)
          .hasClass('or-radio-button')
      ).toBe(true)
    })
  })
})

function createRadioGroup(props) {
  return (
    <RadioGroup name="fruits" onChange={mockCallBack} {...props}>
      <Radio value="apple">Apple</Radio>
      <Radio value="banana">Banana</Radio>
      <Radio value="pear">Pear</Radio>
      <Radio value="disa" disabled>
        disabled
      </Radio>
    </RadioGroup>
  )
}
