import React from 'react'

const index = props => {
  return (
    <select name={props.name} id={props.id}>
      {props.items.map(item => {
        return <option value={item.value}>{item.text}</option>
      })}
    </select>
  )
}

export default index
