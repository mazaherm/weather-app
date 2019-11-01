import React from 'react'
import PropTypes from 'prop-types'

const Paragraph = ({
  ariaLabel,
  children
}) => {
  return (
    <p aria-label={ariaLabel}>{children}</p>
  )
}

Paragraph.propTypes = {
  /** Used to set the label value for screen readers */
  ariaLabel: PropTypes.string,
  /** Used for content that will be shown inside the component */
  children: PropTypes.node.isRequired
}

export default Paragraph
