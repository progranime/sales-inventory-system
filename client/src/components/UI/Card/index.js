import React from 'react'

const index = props => {
  return (
    <div className='card'>
      <div className='card__header'>
        <p className='title'>{props.header}</p>
      </div>
      <div className='card__body'>{props.children}</div>
    </div>
  )
}

export default index
