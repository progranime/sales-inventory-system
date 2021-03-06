import React from 'react'
import { Link } from 'react-router-dom'

import { Input, Label, Button, Form } from '../../UI'

const index = props => {
  return (
    <Form className='register-form' onSubmit={props.onSubmit}>
      <div className='register-form__body'>
        <h3>Register</h3>
        <hr />

        <div className='form-group'>
          <Label htmlFor='firstName'>First Name</Label>
          <Input
            name='firstName'
            id='firstName'
            ref={props.refFirstName}
            required={true}
          />
        </div>

        <div className='form-group'>
          <Label htmlFor='lastName'>Last Name</Label>
          <Input
            name='lastName'
            id='lastName'
            ref={props.refLastName}
            required={true}
          />
        </div>

        <div className='form-group'>
          <Label htmlFor='email'>Email</Label>
          <Input name='email' id='email' ref={props.refEmail} required={true} />
        </div>

        <div className='form-group'>
          <Label htmlFor='password'>Password</Label>
          <Input
            type='password'
            name='password'
            id='password'
            ref={props.refPassword}
            required={true}
          />
        </div>

        <div className='form-group'>
          <Label htmlFor='confirmPassword'>Confirm Password</Label>
          <Input
            type='confirmPassword'
            name='confirmPassword'
            id='confirmPassword'
            ref={props.refConfirmPassword}
          />
        </div>

        <div className='text-right'>
          <Button type='submit' className='btn btn-primary'>
            Register
          </Button>
        </div>
      </div>
      <div className='register-form__footer'>
        <Link to='/auth/login'>Go to Login</Link>
      </div>
    </Form>
  )
}

export default index
