import clx from 'classnames'
import React, { PureComponent } from 'react'

interface Props {
  type?: string
  horizontal?: boolean
  children: any
  name: string
  defaultSelected?: string
  onChange: (currentSelected) => void
}
export class RadioGroup extends PureComponent<Props, {}> {
  state = {
    currentSelected: this.props.defaultSelected
  }
  render() {
    const { horizontal, children, type, name } = this.props
    const radioGroupClass = clx({
      'or-radio-group': true,
      horizontal
    })
    return (
      <div className={radioGroupClass}>
        {React.Children.map(children, (element: any) => {
          return React.cloneElement(element, {
            currentSelected: this.state.currentSelected,
            horizontal,
            type,
            name,
            onClick: this.handleSelect
          })
        })}
      </div>
    )
  }

  handleSelect = value => {
    const { onChange } = this.props
    this.setState(
      {
        currentSelected: value
      },
      () => {
        onChange(this.state.currentSelected)
      }
    )
  }
}
