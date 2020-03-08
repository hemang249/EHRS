import React, {useReducer} from 'react'
import axios from 'axios'
import config from '../../config'
import PatientContext from './patient.context' 
import PatientReducer from './patient.reducer'


import {
    REGISTER_PATIENT,
    SET_PATIENT,
    SET_ERROR,
    SET_METRICS
} from './patient.types'

const PatientState = (props) => {
  const initialState = {
    patient: {},
    metrics: null,
    error: null
  }
  
  const [state, dispatch] = useReducer(PatientReducer, initialState)
  
  // Register Patient
  const registerPatient = async () => {
    console.log(state)
    const res = await axios.post('http://localhost:8080/api/register', {
      userType: 'patient',
      patient: state.patient
    })
    
    if(res.status === 200) {
      dispatch({type: SET_PATIENT, payload: res.data.patient})
      dispatch({type: SET_ERROR, payload: null})
      window.location = '/login'  
    } else {
      window.location = '/error'
    }

  }

  // Set Metrics
  const setMetrics = metrics => {
    let m  = []
    for(const [key, value] of Object.entries(metrics)) {
      m.push({name: key, value: value.length})
    }
    dispatch({type: SET_METRICS, payload: m})
  }

  // Login Patient
  const loginPatient = async (aadharId, password) => {
    const res = await axios.post('http://localhost:8080/api/login', {
      userType: 'doctor',
      aadharId: aadharId,
      password: password 
    }) 

    if(res.status === 200) {
      dispatch({type: SET_PATIENT, payload: res.data.patient })
      dispatch({type: SET_ERROR, payload: false})

    } else if(res.status === 401) {
      dispatch({type: SET_PATIENT, payload: null })
      dispatch({type: SET_ERROR, payload: true})

    } else {
      window.location = "/error"
    }
  }

  // Set Patient
  const setPatient =  (patient) => {
    dispatch({type: SET_PATIENT, payload: patient })
  }

  const setError = (err) => dispatch({type: SET_ERROR, payload: err})

  // Get Patient
  const getPatient = async (aadharId) => {
    console.log(aadharId)
    const res = await axios.get('http://localhost:8080/api/patient-data?aadharId=' + aadharId , {})

    setPatient(res.data.patient)
    setError(res.data.error)
    console.log(res.data) 
  }

  // Filter By Disease
  const filterPatientsByDisease = async (disease) => {
    const res = await axios.get('http://localhost:8080/api/disease-analyse?disease=' + disease, {})
    setPatient(res.data.patients)
  }

  // Filter By City
  const filterPatientsByArea = async (city) => {
    const res = await axios.get('http://localhost:8080/api/area-analyse?city=' + city, {})
    setMetrics(res.data.metrics)
    setPatient(res.data.patients)
  }

  return <PatientContext.Provider
    value={{
      patient: state.patient,
      error: state.error,
      metrics: state.metrics,
      registerPatient: registerPatient,
      loginPatient: loginPatient,
      setPatient: setPatient,
      getPatient: getPatient,
      filterPatientsByDisease: filterPatientsByDisease,
      filterPatientsByArea: filterPatientsByArea
    }}  
  >
    {props.children}
    
  </PatientContext.Provider>
}

export default PatientState