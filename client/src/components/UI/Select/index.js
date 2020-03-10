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
            {props.children}
        </select>
    )
})

index.defaultProps = {
    className: 'form-control'
}

index.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default index
