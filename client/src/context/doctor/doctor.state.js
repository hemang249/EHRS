import React, {useReducer} from 'react'
import axios from 'axios'
import DoctorContext from './doctor.context'
import DoctorReducer from './doctor.reducer'
import {
    SET_DOCTOR,
    REGISTER_DOCTOR,
    SET_ERROR
} from './doctor.types'

const DoctorState = (props) => {
  const initialState = {
    doctor: null,
    error: null
  }

  const [state, dispatch] = useReducer(DoctorReducer, initialState)

  // REGISTER DOCTOR
  const registerDoctor = async () => {
    const res = await axios.post('http://localhost:8080/api/register', {
      userType: 'doctor',
      doctor: state.doctor
    })

    if(res.status === 200) {
      return
    } else {
      window.location = '/error'
    }
  }

  // LOGIN DOCTOR
  const loginDoctor = async (doctorId, password) => {
    const res = await axios.post('http://localhost:8080/api/login', {
      userType: 'doctor',
      doctorId: doctorId,
      password: password
    })
    
    dispatch({type: SET_DOCTOR, payload: res.data.doctor})
    dispatch({type: SET_ERROR, payload: null})

  }

  // SET DOCTOR
  const setDoctor = (doctor) => {
    dispatch({type: SET_DOCTOR, payload: doctor })
  }

  return <DoctorContext.Provider 
    value={{
        doctor: state.doctor,
        error: state.error,
        registerDoctor: registerDoctor,
        loginDoctor: loginDoctor,
        setDoctor: setDoctor
    }}
  
  >
    {props.children}

  </DoctorContext.Provider>
}

export default DoctorState