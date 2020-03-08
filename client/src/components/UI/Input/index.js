import React from 'react'
import PropTypes from 'prop-types'

const index = React.forwardRef((props, ref) => {
  return (
    <input
      type={props.type}
      name={props.name}
      id={props.id}
      className={props.className}
      ref={ref}
      required={props.required}
    />
  )
})

index.defaultProps = {
  type: 'text',
  className: 'form-control',
  required: false
}

index.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  required: PropTypes.bool
}

export default index
