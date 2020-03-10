import { GET_GENDERS } from '../types'

const collection = 'genders'

export const getGenders = () => {
    return async (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()

        let snapshots = await firestore.collection(collection).get(),
            genders = []

        snapshots.docs.map(doc => {
            genders.push({
                ...doc.data(),
                id: doc.id
            })
        })

        dispatch({
            type: GET_GENDERS,
            genders
        })
    }
}
