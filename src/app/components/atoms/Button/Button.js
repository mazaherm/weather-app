import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  children,
  onClick,
  styles
}) => {

  const handleClick = () => onClick()
  return (
    <button className={styles} onClick={handleClick}>{children}</button>
  )
}

Button.propTypes = {
  /** Used for content that will be shown inside the component */
  children: PropTypes.node.isRequired,
  /** Used for adding an onClick event handler to the component */
  onClick: PropTypes.func,
  /** Adds custom styles to component */
  styles: PropTypes.string
}

export default Button
