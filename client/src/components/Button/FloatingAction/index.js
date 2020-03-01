import React from 'react'
import PropTypes from 'prop-types'

const index = props => {
  return (
    <div className='floating-action'>
      <div className='floating-action__container'>{props.children}</div>
    </div>
  )
}

index.propTypes = {
  children: PropTypes.node.isRequired
}

export default index
