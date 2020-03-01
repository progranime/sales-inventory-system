import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import SupplierForm from '../../components/Supplier/Form'
import SupplierTable from '../../components/Supplier/Table'
import { FloatingAction, Modal } from '../../components/UI'

export class index extends Component {
  constructor(props) {
    super(props)

    this.state = {
      supplierData: {
        name: '',
        contact: '',
        address: ''
      },
      isModalOpen: false
    }

    this.$name = React.createRef()
    this.$contact = React.createRef()
    this.$address = React.createRef()
  }

  onSubmit = e => {
    e.preventDefault()

    let supplierData = {
      name: this.$name.current.value,
      contact: this.$contact.current.value,
      address: this.$address.current.value
    }

    this.setState({
      supplierData
    })

    console.log('this: ', supplierData)
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
        <SupplierTable />
        <Modal
          isOpen={this.state.isModalOpen}
          toggle={this.modalHandler.bind(this)}
          title='Supplier Details'
        >
          <SupplierForm
            onSubmit={this.onSubmit.bind(this)}
            refName={this.$name}
            refContact={this.$contact}
            refAddress={this.$address}
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
