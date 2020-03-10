import { CREATE_CUSTOMER, CREATE_CUSTOMER_ERROR, GET_CUSTOMERS } from '../types'

const initState = {
    customer: [],
    customers: [],
    customersColumns: [
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
}

const customerReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATE_CUSTOMER:
            console.log('create customer: ', action.customer)
            return state
        case CREATE_CUSTOMER_ERROR:
            console.log('create customer error ', action.error)
            return state
        case GET_CUSTOMERS:
            console.log('get customers ', action.customers)
            return {
                ...state,
                customers: action.customers
            }
        default:
            return state
    }
}

export default customerReducer
