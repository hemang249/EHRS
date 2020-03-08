import {
    REGISTER_PATIENT,
    SET_PATIENT,
    SET_ERROR,
    SET_METRICS
} from './patient.types'

export default (state, action) => {
    switch(action.type) {
        case SET_PATIENT:
            return {
                ...state,
                patient: action.payload
            }
        
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }

        case SET_METRICS:
            return {
                ...state,
                metrics: action.payload
            }
    }
}