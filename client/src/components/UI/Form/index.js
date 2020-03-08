import React from 'react'
import PropTypes from 'prop-types'

const index = props => {
  return (
    <form
      className={props.className}
      method={props.method}
      onSubmit={props.onSubmit}
    >
      {props.children}
    </form>
  )
}

index.defaultProps = {
  className: 'form',
  method: 'post'
}

index.propTypes = {
  className: PropTypes.string,
  method: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
}

export default index
