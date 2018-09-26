import { mount } from 'enzyme'
import React, { PureComponent } from 'react'

import { Radio, RadioGroup } from '../src'

const mockCallBack = jest.fn()
describe('src/index', () => {
  describe('radio align: #vertical', () => {
    const wrapper = mount(
      renderRadioGroup({
        horizontal: false
      })
    )
    it('should render properly', () => {
      expect(wrapper.find('.or-radio-group').length).toBe(1)
      expect(wrapper.find('.or-radio-group-vertical').length).toBe(1)
      expect(wrapper.find('.or-radio').length).toBe(4)
    })
  })

  describe('radio align: #horizontal', () => {
    const wrapper = mount(
      renderRadioGroup({
        horizontal: true
      })
    )

    it('should render properly', () => {
      expect(wrapper.find('.or-radio-group').length).toBe(1)
      expect(wrapper.find('.or-radio-group-horizontal').length).toBe(1)
      expect(wrapper.find('.or-radio').length).toBe(4)
    })
  })

  describe('radio type: #normal', () => {
    const wrapper = mount(renderRadioGroup({}))

    it('should render properly', () => {
      expect(wrapper.find('.or-radio-group').length).toBe(1)
      expect(wrapper.find('.or-radio').length).toBe(4)
      expect(wrapper.find('.or-radio-normal').length).toBe(4)
    })
  })

  describe('radio type: #button', () => {
    const wrapper = mount(
      renderRadioGroup({
        type: 'button'
      })
    )

    it('should render properly', () => {
      expect(wrapper.find('.or-radio-group').length).toBe(1)
      expect(wrapper.find('.or-radio').length).toBe(4)
      expect(wrapper.find('.or-radio-button').length).toBe(4)
    })
  })

  describe('custom classname', () => {
    const wrapper = mount(
      renderRadioGroup({
        classname: 'hello'
      })
    )

    it('should render properly', () => {
      expect(wrapper.find('.or-radio-group').length).toBe(1)
      expect(wrapper.find('.hello').length).toBe(1)
      expect(wrapper.find('.or-radio').length).toBe(4)
    })
  })

  describe('simulates click events', () => {
    let wrapper
    beforeEach(() => {
      wrapper = mount(<RenderRadioGroup type="button" />)
    })

    afterEach(() => {
      wrapper.unmount()
      mockCallBack.mockReset()
    })

    it('click events: #effective', () => {
      wrapper
        .find('.or-radio')
        .at(0)
        .simulate('click')
      expect(
        wrapper
          .find('.or-radio')
          .at(0)
          .hasClass('or-radio-checked')
      ).toBe(true)
      wrapper
        .find('.or-radio')
        .at(1)
        .simulate('click')
      expect(
        wrapper
          .find('.or-radio')
          .at(0)
          .hasClass('or-radio-checked')
      ).toBe(false)
      expect(
        wrapper
          .find('.or-radio')
          .at(1)
          .hasClass('or-radio-checked')
      ).toBe(true)
    })

    it('click events: #disabled', () => {
      wrapper
        .find('.or-radio')
        .at(3)
        .simulate('click')
      expect(
        wrapper
          .find('.or-radio')
          .at(0)
          .hasClass('or-radio-checked')
      ).toBe(true)
      expect(
        wrapper
          .find('.or-radio')
          .at(3)
          .hasClass('or-radio-checked')
      ).toBe(false)
    })
  })
})

interface Props {
  type?: string
}
class RenderRadioGroup extends PureComponent<Props, {}> {
  state = {
    value: 'apple'
  }
  render() {
    return (
      <RadioGroup
        value={this.state.value}
        onChange={this.handleChange}
        {...this.props}
      >
        <Radio value="apple">Apple</Radio>
        <Radio value="banana">Banana</Radio>
        <Radio value="pear">Pear</Radio>
        <Radio value="disa" disabled>
          disabled
        </Radio>
      </RadioGroup>
    )
  }

  handleChange = value => {
    this.setState({
      value
    })
  }
}

function renderRadioGroup(props) {
  return (
    <RadioGroup value="apple" {...props}>
      <Radio value="apple">Apple</Radio>
      <Radio value="banana">Banana</Radio>
      <Radio value="pear">Pear</Radio>
      <Radio value="disa" disabled>
        disabled
      </Radio>
    </RadioGroup>
  )
}
