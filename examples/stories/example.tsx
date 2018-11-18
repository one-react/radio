import React, { PureComponent } from 'react'
import { Radio, RadioGroup } from '../../src'

export default class RadioExample extends PureComponent {
  state = {
    value1: 'apple',
    value2: 'banana',
    value3: '上海',
    value4: '杭州'
  }
  render() {
    return (
      <div>
        <h1>radio group #horizontal</h1>
        <RadioGroup
          className="hello"
          horizontal
          value={this.state.value1}
          onChange={this.handleClick('value1')}
        >
          <Radio value="apple">Apple</Radio>
          <Radio value="banana">Banana</Radio>
          <Radio value="pear">Pear</Radio>
          <Radio value="avocado">Avocado</Radio>
          <Radio value="Blueberries">Blueberries</Radio>
          <Radio value="Cherries">Cherries</Radio>
          <Radio value="Kiwifruit">Kiwifruit</Radio>
          <Radio value="Lime">Lime</Radio>
          <Radio value="Longan">Longan</Radio>
          <Radio value="Mango">Mango</Radio>
          <Radio value="disa" disabled>
            disabled
          </Radio>
        </RadioGroup>
        <h1>radio group #vertical</h1>
        <RadioGroup
          value={this.state.value2}
          onChange={this.handleClick('value2')}
        >
          <Radio value="apple">Apple</Radio>
          <Radio value="banana">Banana</Radio>
          <Radio value="pear">Pear</Radio>
          <Radio value="avocado">Avocado</Radio>
          <Radio value="disa" disabled>
            disabled
          </Radio>
        </RadioGroup>
        <h1>radio button group #horizontal</h1>
        <RadioGroup
          type="button"
          horizontal
          value={this.state.value3}
          onChange={this.handleClick('value3')}
        >
          <Radio value="杭州">杭州</Radio>
          <Radio value="上海">上海</Radio>
          <Radio value="成都">成都</Radio>
          <Radio value="广州">广州</Radio>
          <Radio value="深圳">深圳</Radio>
          <Radio value="西安">西安</Radio>
          <Radio value="disa" disabled>
            disabled
          </Radio>
        </RadioGroup>
        <h1>radio button group #vertical</h1>
        <RadioGroup
          type="button"
          value={this.state.value4}
          onChange={this.handleClick('value4')}
        >
          <Radio value="杭州">杭州</Radio>
          <Radio value="上海">上海</Radio>
          <Radio value="成都">成都</Radio>
          <Radio value="disa" disabled>
            disabled
          </Radio>
        </RadioGroup>
      </div>
    )
  }

  handleClick = groupValue => {
    return value => {
      this.setState({
        [`${groupValue}`]: value
      })
    }
  }
}
