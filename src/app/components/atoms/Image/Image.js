import React from 'react'
import PropTypes from 'prop-types'

const Image = ({
  alt,
  src,
  height,
  width,
  styles
}) => {
  return (
    <img 
      alt={alt}
      src={src}
      height={height}
      width={width}
      className={styles}
    />
  )
}

Image.propTypes = {
  /** Specifies an alternate text for an image */
  alt: PropTypes.string.isRequired,
  /** Specifies the URL of an image */
  src: PropTypes.string.isRequired,
  /** Specifies the height of an image */
  height: PropTypes.string,
  /** Specifies the width of an image */
  width: PropTypes.string,
  /** Adds custom styles to component */
  styles: PropTypes.string
}

export default Image
