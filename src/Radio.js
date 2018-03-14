import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Radio extends React.Component {
  render () {
    const {children, name, type, value, disabled, defaultChecked} = this.props
    const radioClass = classNames({
      'or-radio': true,
      [`or-radio-${type}`]: true,
      disabled
    })

    return (
      <div className={radioClass}>
        <input
          type='radio'
          id={`or-radio-${value}`}
          name={name}
          value={value}
          defaultChecked={defaultChecked}
          onClick={this.handleClick} />
        <label htmlFor={`or-radio-${value}`}>{children}</label>
      </div>
    )
  }

  handleClick = (e) => {
    const {disabled, onClick, value} = this.props
    if (disabled) {
      e.preventDefault()
    }
    onClick(value)
  }
}

Radio.propTypes = {
  children: PropTypes.children,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool
}

export default Radio
