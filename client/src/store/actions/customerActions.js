import { CREATE_CUSTOMER } from '../types'

export const createCustomer = customer => {
  return (dispatch, getState) => {
    dispatch({
      type: CREATE_CUSTOMER,
      customer
    })
  }
}
