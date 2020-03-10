import React from 'react'

import { Input, Select, Label, Button, Form } from '../../UI'

const index = props => {
    return (
        <Form onSubmit={props.onSubmit}>
            <div className='form-group'>
                <Label htmlFor='name'>Name</Label>
                <Input name='name' id='name' ref={props.refName} />
            </div>

            <div className='form-group'>
                <Label htmlFor='contact'>Contact</Label>
                <Input
                    type='tel'
                    name='contact'
                    id='contact'
                    ref={props.refContact}
                />
            </div>

            <div className='form-group'>
                <Label htmlFor='address'>Address</Label>
                <Input name='address' id='address' ref={props.refAddress} />
            </div>

            <div className='form-group'>
                <Label htmlFor='gender'>Gender</Label>
                <Select name='gender' id='gender' ref={props.refGender}>
                    {props.genders.map(gender => {
                        return (
                            <option value={gender.id} key={gender.id}>
                                {gender.name}
                            </option>
                        )
                    })}
                </Select>
            </div>

            <div className='form-group text-right'>
                <Button
                    type='button'
                    className='btn btn-secondary btn--wide mr-2'
                    onClick={props.toggle}
                >
                    Cancel
                </Button>
                <Button type='submit' className='btn btn-primary btn--wide'>
                    Save
                </Button>
            </div>
        </Form>
    )
}

export default index
