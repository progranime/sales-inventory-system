import { CREATE_CUSTOMER, CREATE_CUSTOMER_ERROR, GET_CUSTOMERS } from '../types'

export const createCustomer = customer => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()

        firestore
            .collection('customers')
            .add({
                ...customer,
                dateCreated: new Date()
            })
            .then(() => {
                dispatch({
                    type: CREATE_CUSTOMER,
                    customer
                })
            })
            .catch(error => {
                dispatch({
                    type: CREATE_CUSTOMER_ERROR,
                    error
                })
            })
    }
}

export const getCustomers = () => {
    return async (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        let customersSnapshots = await firestore.collection('customers').get(),
            customers = []

        customersSnapshots.docs.map(doc => {
            customers.push({
                ...doc.data(),
                id: doc.id
            })
        })

        dispatch({
            type: GET_CUSTOMERS,
            customers
        })
    }
}
