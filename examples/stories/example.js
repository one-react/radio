import React from 'react'

import {Radio} from '../../src'
import {RadioGroup} from '../../src'

class Example extends React.Component {
  render () {
    return (
      <div className='radio-group-eg'>
        <h1>radio group</h1>
        <RadioGroup name='fruits' defaultSelected='apple' onChange={(value) => console.log(value)}>
          <Radio value='apple'>Apple</Radio>
          <Radio value='banana'>Banana</Radio>
          <Radio value='pear'>Pear</Radio>
          <Radio value='disa' disabled>disabled</Radio>
        </RadioGroup>
        <h1>radio button group, horizontal</h1>
        <RadioGroup type='button' name='city' horizontal defaultSelected='上海' onChange={(value) => console.log(value)}>
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
