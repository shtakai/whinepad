import classNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
  return props.href
    ? <a {...props} className={classNames('Button', props.className)}/>
    : <button {...props} className={classNames('Button', props.className)}/>
}

Button.propTypes = {
  href: PropTypes.string,
}

export default Button

