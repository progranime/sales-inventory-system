import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { Input, Card, FloatingAction, Modal } from '../../components'

// const { SearchBar } = Search

const columns = [
  {
    dataField: 'id',
    text: 'Id',
    sort: true
  },
  {
    dataField: 'name',
    text: 'Name',
    sort: true
  },
  {
    dataField: 'contact',
    text: 'Contact',
    sort: true
  },
  {
    dataField: 'gender',
    text: 'Gender',
    sort: true
  }
]

const products = [
  {
    id: 1,
    name: 'Jeremy Espinosa',
    contact: '09157978892',
    gender: 'Male'
  },
  {
    id: 2,
    name: 'Giancarlo Espinosa',
    contact: '09157978892',
    gender: 'Male'
  },
  {
    id: 3,
    name: 'Moira Espinosa',
    contact: '09157978892',
    gender: 'Female'
  }
]

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customerDetails: {
        name: '',
        contact: '',
        address: '',
        gender: 1
      },
      isModalOpen: false
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

  modalHandler = () => {
    this.setState(prevState => {
      return {
        isModalOpen: !prevState.isModalOpen
      }
    })
  }

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-sm-12'>
            <Card header='Customer Details'>
              <ToolkitProvider
                keyField='id'
                data={products}
                columns={columns}
                search
              >
                {props => (
                  <div className='react-bootstrap-table-custom'>
                    {/* <SearchBar {...props.searchProps} /> */}
                    <BootstrapTable
                      {...props.baseProps}
                      bordered={false}
                      noDataIndication='Looking for customers ...'
                    />
                  </div>
                )}
              </ToolkitProvider>
            </Card>
          </div>
        </div>

        <FloatingAction onClick={this.modalHandler.bind(this)}>
          <FontAwesomeIcon icon={faPlus} />
        </FloatingAction>

        <Modal
          isOpen={this.state.isModalOpen}
          toggle={this.modalHandler.bind(this)}
          title='Customer Details'
        >
          <form
            className='form'
            method='post'
            onSubmit={this.onSubmit.bind(this)}
          >
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
              <button type='reset' className='btn btn-secondary btn--wide mr-2'>
                Cancel
              </button>
              <button type='submit' className='btn btn-primary btn--wide'>
                Save
              </button>
            </div>
          </form>
        </Modal>
      </div>
    )
  }
}

export default Index
