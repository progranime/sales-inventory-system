import React from 'react'

import { Input } from '../../UI'

const index = props => {
  return (
    <form method='post' onSubmit={props.onSubmit}>
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <Input name='name' id='name' ref={props.refName} />
      </div>

      <div className='form-group'>
        <label htmlFor='contact'>Contact</label>
        <Input name='contact' id='contact' ref={props.refContact} />
      </div>

      <div className='form-group'>
        <label htmlFor='address'>Address</label>
        <Input name='address' id='address' ref={props.refAddress} />
      </div>

      <div className='form-group text-right'>
        <button type='reset' className='btn btn-secondary btn--wide mr-2'>
          Cancel
        </button>
        <button type='submit' className='btn btn-primary btn--wide'>
          Save
        </button>
      </div>
    </form>
  )
}

export default index
