import clx from 'classnames'
import React, { MouseEvent, PureComponent } from 'react'

interface Props {
  /**
   * type for the radio
   **/
  type?: 'button'
  horizontal?: boolean
  name?: string
  value: string
  children: any
  disabled?: boolean
  onClick?: (value) => void
  currentSelected?: string
}

export class Radio extends PureComponent<Props, {}> {
  render() {
    const {
      children,
      name,
      type,
      value,
      disabled,
      currentSelected,
      horizontal
    } = this.props
    const radioClass = clx(
      {
        'or-radio-vertical': !horizontal,
        'or-radio-horizontal': horizontal,
        'or-radio-button': type === 'button',
        [`or-radio-checked`]: currentSelected === value,
        disabled
      },
      'or-radio'
    )

    return (
      <label htmlFor={`or-radio-${value}`} className={radioClass}>
        <input
          type="radio"
          id={`or-radio-${value}`}
          name={name}
          value={value}
          onClick={this.handleClick}
        />
        {type !== 'button' ? (
          <div className="radio-icon-wrapper">
            <div className="radio-icon-inner" />
          </div>
        ) : null}
        <div className="label-name">{children}</div>
      </label>
    )
  }

  handleClick = (e: MouseEvent<HTMLElement>) => {
    const { disabled, onClick, value, currentSelected } = this.props
    if (disabled || currentSelected === value) {
      e.preventDefault()
    } else {
      onClick(value)
    }
  }
}
