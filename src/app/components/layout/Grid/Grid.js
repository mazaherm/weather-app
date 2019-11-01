import React from 'react'
import PropTypes from 'prop-types'

const Grid = ({
  children,
  styles
}) => {
  return (
    <div className={styles}>{children}</div>
  )
}

Grid.propTypes = {
  /** Contains all children within the Grid */
  children: PropTypes.any,
  /** Adds custom styles to component */
  styles: PropTypes.string
}

export default Grid
