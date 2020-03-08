import React from 'react'
import PropTypes from 'prop-types'

const index = props => {
  return (
    <label htmlFor={props.htmlFor} className={props.className}>
      {props.children}
    </label>
  )
}

index.defaultProps = {
  className: 'form-label'
}

index.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default index
