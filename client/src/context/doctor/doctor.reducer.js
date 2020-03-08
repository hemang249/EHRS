import {
    REGISTER_DOCTOR,
    SET_DOCTOR,
    SET_ERROR
} from './doctor.types'

export default (state, action) => {
    switch(action.type) {
        case SET_DOCTOR:
            return {
                ...state,
                doctor: action.payload
            }
        
        case SET_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
            
    }
}