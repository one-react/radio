import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Radio, RadioGroup } from '../../src'
import './styles.scss'

const handleClick = action('button-click')
storiesOf('or-radio', module).add(
  'radio',
  withInfo({ inline: true })(() => (
    <div>
      <h1>radio group</h1>
      <RadioGroup name="fruits" defaultSelected="apple" onChange={handleClick}>
        <Radio value="apple">Apple</Radio>
        <Radio value="banana">Banana</Radio>
        <Radio value="pear">Pear</Radio>
        <Radio value="disa" disabled>
          disabled
        </Radio>
      </RadioGroup>
      <h1>radio button group, horizontal</h1>
      <RadioGroup
        type="button"
        name="city"
        horizontal
        defaultSelected="上海"
        onChange={handleClick}
      >
        <Radio value="杭州">杭州</Radio>
        <Radio value="上海">上海</Radio>
        <Radio value="成都">成都</Radio>
        <Radio value="disa" disabled>
          disabled
        </Radio>
      </RadioGroup>
    </div>
  ))
)
