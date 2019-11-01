import React from 'react'
import PropTypes from 'prop-types'

const Heading = ({
  children,
  size,
  align,
  styles
}) => {
  const Tag = `h${size}`
  if (size > 6) return null
  return (
    <Tag className={styles} align={align}>{children}</Tag>
  )
}

Heading.propTypes = {
  /** Used for content that will be shown inside the component */
  children: PropTypes.string.isRequired,
  /** Selects the desired \<h\> element to use */
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  /** Aligns the text within the heading */
  align: PropTypes.oneOf(['left', 'center', 'right']),
  /** Adds custom styles to component */
  styles: PropTypes.string
}

export default Heading
