import React from 'react'
import PropTypes from 'prop-types'

const Grid = ({
  children
}) => {
  return (
    <div>{children}</div>
  )
}

Grid.propTypes = {
  /** Contains all children within the Grid */
  children: PropTypes.any
}

export default Grid
