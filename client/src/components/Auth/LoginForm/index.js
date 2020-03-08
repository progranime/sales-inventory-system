import React from 'react'
import { Link } from 'react-router-dom'

import { Input, Label, Button, Form } from '../../UI'

const index = props => {
  return (
    <Form className='login-form' onSubmit={props.onSubmit}>
      <div className='login-form__body'>
        <h3>Login</h3>
        <hr />

        <div className='form-group'>
          <Label htmlFor='email'>Email</Label>
          <Input name='email' id='email' ref={props.refEmail} />
        </div>

        <div className='form-group'>
          <Label htmlFor='password'>Password</Label>
          <Input
            type='password'
            name='password'
            id='password'
            ref={props.refPassword}
          />
        </div>

        <div className='text-right'>
          <Button type='submit' className='btn btn-primary'>
            Login
          </Button>
        </div>
      </div>

      <div className='login-form__footer'>
        <Link to='/auth/register'>Register User?</Link>
      </div>
    </Form>
  )
}

export default index
