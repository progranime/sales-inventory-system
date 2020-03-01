import React from 'react'

import { Input, Select } from '../../UI'

const genderOptions = [
  {
    value: 1,
    text: 'Male'
  },
  {
    value: 2,
    text: 'Female'
  }
]

const index = React.forwardRef((props, ref) => {
  return (
    <form method='post' onSubmit={props.onSubmit}>
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <Input name='name' id='name' ref={props.refName} />
      </div>

      <div className='form-group'>
        <label htmlFor='contact'>Contact</label>
        <Input type='tel' name='contact' id='contact' ref={props.refContact} />
      </div>

      <div className='form-group'>
        <label htmlFor='address'>Address</label>
        <Input name='address' id='address' ref={props.refAddress} />
      </div>

      <div className='form-group'>
        <label htmlFor='gender'>Gender</label>
        <Select
          name='gender'
          id='gender'
          items={genderOptions}
          ref={props.refGender}
        />
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
})

export default index
