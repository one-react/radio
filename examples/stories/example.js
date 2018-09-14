import React from 'react'

import {Radio} from '../../src'
import {RadioGroup} from '../../src'

class Example extends React.Component {
  render () {
    return (
      <div className='radio-group-eg'>
        <RadioGroup name='fruits' defaultSelected='apple'>
          <Radio value='apple'>apple</Radio>
          <Radio value='banana'>banana</Radio>
          <Radio value='pear'>pear</Radio>
          <Radio value='disa' disabled>disabled</Radio>
        </RadioGroup>
        <RadioGroup type='button' name='city' horizontal defaultSelected='上海'>
          <Radio value='杭州'>杭州</Radio>
          <Radio value='上海' defaultChecked>上海</Radio>
          <Radio value='成都'>成都</Radio>
          <Radio value='disa' disabled>disabled</Radio>
        </RadioGroup>
      </div>
    )
  }
}

export default Example
