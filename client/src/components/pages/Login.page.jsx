import React, {useState, useContext} from 'react'
import TopNavbar from '../layout/Navbar.component'

import PatientContext from '../../context/patient/patient.context'
import DoctorContext from '../../context/doctor/doctor.context'
import { Redirect } from 'react-router-dom'

const Login = (props) => {

	const patientContext = useContext(PatientContext)
	const doctorContext = useContext(DoctorContext)

	const [userType, setUserType] = useState("patient")
	const onSelectUserType = () => setUserType(document.getElementById('userType').value)

	const onPatientSubmit = async (e) => {
		e.preventDefault()
		const aadharId = document.getElementById('aadharId').value
		const password = document.getElementById('password').value
		
		await patientContext.loginPatient(aadharId, password)
	}

	const onDoctorSubmit = async (e) => {
		e.preventDefault()

		const doctorId = document.getElementById('doctorId').value
		const password = document.getElementById('password').value

		await doctorContext.loginDoctor(doctorId, password)
	}

	return(
		<div>	
			<TopNavbar 
				item1="Login" link1="/login"
				item2="Register" link2="/register"
				item3="About" link3="/about"
			/>

			<div className="container">
			  <label htmlFor="">You are a </label>
				<select name="" id="userType" onChange={onSelectUserType}>
					<option value="patient">Patient</option>
					<option value="doctor">Doctor</option>
				</select>

				{
					userType === 'patient' 
					?
					<form action="">
						<label htmlFor="">Aadhar Id</label>
						<input type="text" id="aadharId" placeholder="Enter Your Aadhar Number"/>
						
						<label htmlFor="">Password</label>
						<input type="password" id="password" placeholder="Enter Your Password"/> <br/>
						<button className="btn btn-primary" onClick={onPatientSubmit}>Login</button>
					</form>
					
					:

					<form action="">
						<label htmlFor="">Doctor Id</label>
						<input type="text" id="doctorId" placeholder="Enter Your ID"/>
						
						<label htmlFor="">Password</label>
						<input type="password" id="password" placeholder="Enter Your Password"/> <br/>
						<button className="btn btn-primary" onClick={onDoctorSubmit}>Login</button>
					</form>
						
				}
				
			</div>

			{
				doctorContext.doctor !== null && <Redirect to="/doctor" />
			}

			{
				patientContext.error !== null && <Redirect to="/patient" />
			}
		</div>
	)
}

export default Login