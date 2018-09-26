import clx from 'classnames'
import React, { PureComponent } from 'react'
interface Props {
  /**
   * type for the radio
   * @default 'normal'
   **/
  type?: string

  /**
   * radio group layouts horizontally or vertically
   * @default 'false'
   **/
  horizontal?: boolean

  /**
   * children of the radio group
   **/
  children: React.ReactNode

  /**
   * current value of the radio group
   **/
  value?: string

  /**
   * custom classname
   **/
  classname?: string

  /**
   * callback triggered by click
   **/
  onChange: (currentSelected) => void
}
export class RadioGroup extends PureComponent<Props, {}> {
  render() {
    const { horizontal, children, type, value, classname } = this.props
    const radioGroupClass = clx(
      {
        'or-radio-group-horizontal': horizontal,
        'or-radio-group-vertical': !horizontal
      },
      'or-radio-group',
      classname
    )
    return (
      <div className={radioGroupClass}>
        {React.Children.map(children, (radio: React.ReactElement<any>) => {
          return React.cloneElement(radio, {
            checked: value === radio.props.value,
            type,
            onClick: this.handleOnChange
          })
        })}
      </div>
    )
  }

  handleOnChange = value => {
    const { onChange } = this.props
    onChange(value)
  }
}
