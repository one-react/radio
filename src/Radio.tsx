import clx from 'classnames'
import Button from 'or-button'
import React, { PureComponent } from 'react'
interface Props {
  /**
   * type for the radio
   * @default 'normal'
   **/
  type?: 'button'

  /**
   * radio group layouts horizontally or vertically
   * @default 'false'
   **/
  horizontal?: boolean

  /**
   * value of the radio
   **/
  value: string

  /**
   * whether the radio is checked or not
   **/
  checked?: boolean

  /**
   * children of the radio
   **/
  children: React.ReactNode

  /**
   * whether the radio can be clicked
   **/
  disabled?: boolean

  /**
   * callback triggered by click
   **/
  onClick?: (value) => void
}

export class Radio extends PureComponent<Props, {}> {
  render() {
    const { children, type = 'normal', checked, disabled } = this.props
    const radioClass = clx(
      {
        [`or-radio-${type}`]: type,
        'or-radio-checked': checked,
        'or-radio-disabled': disabled
      },
      'or-radio'
    )
    return (
      <>
        {type === 'button' ? (
          <div className={radioClass} onClick={this.handleClick}>
            <Button small disabled={this.props.disabled}>
              {children}
            </Button>
          </div>
        ) : (
          <div className={radioClass} onClick={this.handleClick}>
            <div className="or-radio-icon-wrapper">
              <div className="or-radio-icon-inner" />
            </div>
            <span className="or-radio-lable">{children}</span>
          </div>
        )}
      </>
    )
  }

  handleClick = () => {
    const { disabled, onClick, value, checked } = this.props
    if (!disabled && !checked) {
      onClick(value)
    }
  }
}
