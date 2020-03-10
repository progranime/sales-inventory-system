import { GET_GENDERS } from '../types'

const initState = {
    genders: []
}

const genderReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_GENDERS:
            return {
                ...state,
                genders: action.genders
            }
        default:
            return state
    }
}

export default genderReducer
