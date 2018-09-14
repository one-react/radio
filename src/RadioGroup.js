import React from 'react'
import PropTypes from 'prop-types'
import clx from 'classnames'

class RadioGroup extends React.Component {
  state = {
    currentSelected: this.props.defaultSelected
  }
  render () {
    const {horizontal, children, type, name} = this.props
    const radioGroupClass = clx({
      'or-radio-group': true,
      horizontal
    })
    return (
      <div className={radioGroupClass}>
        {
          React.Children.map(children, (element) => {
            return React.cloneElement(element, { currentSelected: this.state.currentSelected, horizontal, type, name, onClick: this.handleSelect })
          })
        }
      </div>
    )
  }

  handleSelect = (value) => {
    this.setState({
      currentSelected: value
    })
  }
}

RadioGroup.propTypes = {
  type: PropTypes.string,
  horizontal: PropTypes.bool,
  children: PropTypes.node,
  name: PropTypes.string,
  defaultSelected: PropTypes.string
}

export default RadioGroup
