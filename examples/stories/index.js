import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'

import {Radio, RadioGroup} from '../../src'

storiesOf('Hello', module)
  .add('radio', () => (
    <Radio value='apple'>singleRadio</Radio>
  ))
  .add('radio group default', () => (
    <RadioGroup name='fruits'>
      <Radio value='apple'>apple</Radio>
      <Radio value='banana'>banana</Radio>
      <Radio value='pear'>pear</Radio>
      <Radio value='dis' disabled>disabled</Radio>
    </RadioGroup>
  ))
  .add('radio group horizontal', () => (
    <RadioGroup name='fruits' horizontal>
      <Radio value='apple'>apple</Radio>
      <Radio value='banana'>banana</Radio>
      <Radio value='pear'>pear</Radio>
      <Radio value='dis' disabled>disabled</Radio>
    </RadioGroup>
  ))
  .add('radio group button', () => (
    <div>
      <div>Please select a type of fruits</div>
      <RadioGroup type='button' name='fruits' horizontal>
        <Radio value='apple'>apple</Radio>
        <Radio value='banana'>banana</Radio>
        <Radio value='pear' defaultChecked>pear</Radio>
        <Radio value='dis' disabled>disabled</Radio>
      </RadioGroup>
      <div>请选择城市</div>
      <RadioGroup type='button' name='city' horizontal>
        <Radio value='杭州'>杭州</Radio>
        <Radio value='上海' defaultChecked>上海</Radio>
        <Radio value='成都'>成都</Radio>
        <Radio value='dis' disabled>disabled</Radio>
      </RadioGroup>
    </div>
  ))
