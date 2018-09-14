import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Radio extends React.Component {
  render () {
    const {children, name, type, value, disabled, currentSelected, horizontal} = this.props
    const radioClass = classNames({
      'or-radio': true,
      'or-radio-vertical': !horizontal,
      'or-radio-horizontal': horizontal,
      'or-radio-button': type === 'button',
      [`or-radio-checked`]: currentSelected === value,
      disabled
    })

    return (
      <label htmlFor={`or-radio-${value}`} className={radioClass}>
        <input
          type='radio'
          id={`or-radio-${value}`}
          name={name}
          value={value}
          onClick={this.handleClick} />
        { type !== 'button'
          ? <div className='radio-icon-wrapper'>
            <div className='radio-icon-inner' />
          </div>
          : null
        }
        <div className='label-name'>{children}</div>
      </label>
    )
  }

  handleClick = (e) => {
    const {disabled, onClick, value} = this.props
    if (disabled) {
      e.preventDefault()
    } else {
      onClick(value)
    }
  }
}

Radio.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  currentSelected: PropTypes.string,
  horizontal: PropTypes.bool
}

export default Radio
