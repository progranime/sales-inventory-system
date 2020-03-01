import React from 'react'
import PropTypes from 'prop-types'

const index = React.forwardRef((props, ref) => {
  return (
    <select
      name={props.name}
      id={props.id}
      className={props.className}
      ref={ref}
    >
      {props.items.map(item => {
        return (
          <option value={item.value} key={item.value}>
            {item.text}
          </option>
        )
      })}
    </select>
  )
})

index.defaultProps = {
  className: 'form-control'
}

index.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  items: PropTypes.array.isRequired
}

export default index
