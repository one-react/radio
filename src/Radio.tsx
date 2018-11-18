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
  onClick?: () => void
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
      <div className={radioClass} onClick={this.handleClick}>
        {type === 'button' ? (
          <Button size="small" disabled={this.props.disabled}>
            {children}
          </Button>
        ) : (
          <>
            <div className="or-radio-icon-wrapper">
              <div className="or-radio-icon-inner" />
            </div>
            <span className="or-radio-label">{children}</span>
          </>
        )}
      </div>
    )
  }

  handleClick = () => {
    const { disabled, onClick, checked } = this.props
    if (!disabled && !checked) {
      onClick()
    }
  }
}
