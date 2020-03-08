import { CREATE_CUSTOMER, CREATE_CUSTOMER_ERROR } from '../types'

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
