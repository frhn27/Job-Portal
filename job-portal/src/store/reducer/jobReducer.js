import { FETCH_JOB_SUCCESS } from "../action/actionType";

const initialState = {
    jobs: []
}

const jobReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_JOB_SUCCESS:
            const newState = {
                ...state,
                jobs : action.payload
            }
            return newState
        default:
            return state
    }
}

export default jobReducer