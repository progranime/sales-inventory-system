import React from 'react'
import PropTypes from 'prop-types'

const index = props => {
    return (
        <button
            type={props.type}
            className={props.className}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

index.defaultProps = {
    type: 'button',
    className: 'btn'
}

index.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func
}

export default index
