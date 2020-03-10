import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import CustomerForm from '../../components/Customer/Form'
import CustomerTable from '../../components/Customer/Table'
import { FloatingAction, Modal } from '../../components/UI'
import {
    getCustomers,
    createCustomer
} from '../../store/actions/customerActions'
import { getGenders } from '../../store/actions/genderActions'

class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            contact: '',
            address: '',
            gender: 1
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

        this.setState(customerData)

        this.props.createCustomer(customerData)

        // get the latest customers
        this.props.getCustomers()

        this.setState(prevState => {
            return {
                isModalOpen: !prevState.isModalOpen
            }
        })
    }

    modalHandler = () => {
        this.setState(prevState => {
            return {
                isModalOpen: !prevState.isModalOpen
            }
        })
    }

    // lifecycle

    componentDidMount() {
        // get the latest customers
        this.props.getCustomers()
        // get the genders
        this.props.getGenders()
    }

    render() {
        const { customers, customersColumns, genders } = this.props

        return (
            <div>
                <CustomerTable data={customers} columns={customersColumns} />
                <Modal
                    isOpen={this.state.isModalOpen}
                    toggle={this.modalHandler}
                    title='Customer Details'
                >
                    <CustomerForm
                        onSubmit={this.onSubmit}
                        refName={this.$name}
                        refContact={this.$contact}
                        refAddress={this.$address}
                        refGender={this.$gender}
                        toggle={this.modalHandler}
                        genders={genders}
                    />
                </Modal>

                <FloatingAction onClick={this.modalHandler}>
                    <FontAwesomeIcon icon={faPlus} />
                </FloatingAction>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCustomers: () => dispatch(getCustomers()),
        createCustomer: customer => dispatch(createCustomer(customer)),
        getGenders: () => dispatch(getGenders())
    }
}

const mapStateToProps = state => {
    return {
        customers: state.customer.customers,
        customersColumns: state.customer.customersColumns,
        genders: state.gender.genders
    }
}

export default compose(
    firestoreConnect(['customers']),
    connect(mapStateToProps, mapDispatchToProps)
)(index)
