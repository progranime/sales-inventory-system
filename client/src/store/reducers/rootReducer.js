import { combineReducers } from 'redux'

import authReducer from './authReducer'
import customerReducer from './customerReducer'
import supplierReducer from './supplierReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  customer: customerReducer,
  supplier: supplierReducer
})

export default rootReducer
