import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

import authReducer from './authReducer'
import customerReducer from './customerReducer'
import supplierReducer from './supplierReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  customer: customerReducer,
  supplier: supplierReducer,
  firestore: firestoreReducer
})

export default rootReducer
