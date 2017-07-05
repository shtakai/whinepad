import classNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
  //const cssclassess = classNames('Button', props.className)
  //return props.href
    //? <a {...props} className={cssclassess} />
    //: <Button {...props} className={cssclassess} />
  return <p>test</p>
}

Button.propTypes = {
  href: PropTypes.string,
}

export default Button

