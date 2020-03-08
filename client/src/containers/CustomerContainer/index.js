import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'

import CustomerForm from '../../components/Customer/Form'
import CustomerTable from '../../components/Customer/Table'
import { FloatingAction, Modal } from '../../components/UI'
import { createCustomer } from '../../store/actions/customerActions'

class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customerData: {
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
    let customerData = {
      name: this.$name.current.value,
      contact: this.$contact.current.value,
      address: this.$address.current.value,
      gender: this.$gender.current.value
    }

    this.setState({
      customerData
    })

    this.props.createCustomer(customerData)
  }

  modalHandler = () => {
    this.setState(prevState => {
      return {
        isModalOpen: !prevState.isModalOpen
      }
    })
  }

  render() {
    const { customers, customersColumns } = this.props

    return (
      <div>
        <CustomerTable data={customers} columns={customersColumns} />
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

const mapDispatchToProps = dispatch => {
  return {
    createCustomer: customer => dispatch(createCustomer(customer))
  }
}

const mapStateToProps = state => {
  return {
    customers: state.customer.customers,
    customersColumns: state.customer.customersColumns
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index)
