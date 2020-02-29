import React, { Component } from 'react'

import { Input, Card } from '../../components'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customerDetails: {
        name: '',
        contact: '',
        address: '',
        gender: 1
      }
    }
    this.$name = React.createRef()
    this.$contact = React.createRef()
    this.$address = React.createRef()
  }

  onSubmit = e => {
    e.preventDefault()

    let customerDetails = {
      name: this.$name.current.value,
      contact: this.$contact.current.value,
      address: this.$address.current.value
    }

    this.setState({
      customerDetails
    })
  }

  render() {
    return (
      <div className='row'>
        <div className='col-sm-6'>
          <Card>
            <form
              className='form'
              method='post'
              onSubmit={this.onSubmit.bind(this)}
            >
              <h4>Customer Form</h4>

              <hr />

              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <Input name='name' id='name' ref={this.$name} />
              </div>
              <div className='form-group'>
                <label htmlFor='contact'>Contact</label>
                <Input
                  type='tel'
                  name='contact'
                  id='contact'
                  ref={this.$contact}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='address'>Address</label>
                <Input name='address' id='address' ref={this.$address} />
              </div>
              <div className='form-group'>
                <label htmlFor='gender'>Gender</label>
                <select name='gender' id='gender' className='form-control'>
                  <option value='1'>Male</option>
                  <option value='2'>Female</option>
                </select>
              </div>

              <div className='form-group text-right'>
                <button
                  type='reset'
                  className='btn btn-secondary btn--wide mr-2'
                >
                  Cancel
                </button>
                <button type='submit' className='btn btn-primary btn--wide'>
                  Save
                </button>
              </div>
            </form>
          </Card>
        </div>
        <div className='col-sm-6'>
          <Card>
            <h4>Customer Details</h4>

            <hr />
          </Card>
        </div>
      </div>
    )
  }
}

export default Index
