import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import CustomerForm from '../../components/Customer/Form'
import CustomerTable from '../../components/Customer/Table'
import { FloatingAction, Modal } from '../../components/UI'

class index extends Component {
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
    this.$gender = React.createRef()
  }

  onSubmit = e => {
    e.preventDefault()
    let customerDetails = {
      name: this.$name.current.value,
      contact: this.$contact.current.value,
      address: this.$address.current.value,
      gender: this.$gender.current.value
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
        <CustomerTable />
        <Modal
          isOpen={this.state.isModalOpen}
          toggle={this.modalHandler.bind(this)}
          title='Customer Details'
        >
          <CustomerForm
            onSubmit={this.onSubmit.bind(this)}
            refName={this.$name}
            refContact={this.$contact}
            refAddress={this.$address}
            refGender={this.$gender}
          />
        </Modal>

        <FloatingAction onClick={this.modalHandler.bind(this)}>
          <FontAwesomeIcon icon={faPlus} />
        </FloatingAction>
      </div>
    )
  }
}

export default index
