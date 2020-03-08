import React, {useContext, useState} from 'react'
import TopNavbar from '../layout/Navbar.component'

import PatientContext from '../../context/patient/patient.context'
import DoctorContext from '../../context/doctor/doctor.context'

const Register = (props) => {

  const [userType, setUserType] = useState("patient")

  const patientContext = useContext(PatientContext)
  const doctorContext = useContext(DoctorContext)

  const onSelectUserType = () => setUserType(document.getElementById('userType').value)

  const onPatientSubmit = (e) => {
    e.preventDefault()
    const patient = {
      name: document.getElementById('name').value,
      aadharId: document.getElementById('aadharId').value,
      password: document.getElementById('password').value,
      dob: document.getElementById('dob').value,
      age: document.getElementById('age').value,
      contact: document.getElementById('contact').value,
      gender: document.getElementById('gender').value,
      address: {
        addressLine: document.getElementById('addressLine').value,
        locality: document.getElementById('district').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value
      }
    }

    
    patientContext.setPatient(patient)
    patientContext.registerPatient()
  }

  const onDoctorSubmit =  (e) => {
    e.preventDefault()

    const doctor = {
      name: document.getElementById('name').value,
      doctorId: document.getElementById('doctorId').value,
      password: document.getElementById('password').value,
      dob: document.getElementById('dob').value,
      age: document.getElementById('age').value,
      contact: document.getElementById('contact').value,
      gender: document.getElementById('gender').value,
      email: document.getElementById('email').value,
      hospitalName: document.getElementById('hospitalName').value,
      doctorType: document.getElementById('doctorType').value
    }

    doctorContext.setDoctor(doctor)
    doctorContext.registerDoctor()
  }

  return (
    
    <div>
    <TopNavbar 
      item1="Login" link1="/login"
      item2="Register" link2="/register"
      item3="About" link3="/about"
    />

    <div className="container">
      <label htmlFor="">You are A : </label>
      <select name="" id="userType" onChange={onSelectUserType}>
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
      </select>
      
      { userType === 'patient'
        ?
        <form action="">
        <label htmlFor="">Name</label>
        <input id="name" type="text" placeholder="Enter Name" for="name" name="name"/>
        
        <label htmlFor="">Aadhar Id</label>
        <input id="aadharId" type="text" for="aadharId" name="aadharId" placeholder="Enter Aadhar Number"/>
        
        <label htmlFor="">Password</label>
        <input type="text" type="password" name="password" name="password" id="password" />

        <label htmlFor="">Date Of Birth</label>
        <input id="dob" type="date" placeholder/>          
        
        <label htmlFor="">Age</label> <br/>
        <input id="age" type="number" placeholder="Enter Age"/> <br/>
        
        <label htmlFor="">Contact</label>
        <input id="contact" type="text" for="contact" name="contact" placeholder="Enter Your Number"/>
        
        <label htmlFor="">Gender</label>
        <select id="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="">Address</label> <br/>
        <input id="addressLine" type="text" for="addressLine" name="addressLine" placeholder="Enter Address line"/> <br/>
        <input id="district" type="text" for="district" name="district" placeholder="Enter District"/> <br/>
        <input id="city" type="text" for="city" name="city" placeholder="Enter City"/> <br/>
        <input id="state" type="text" for="state" name="state" placeholder="Enter State"/> <br/>
        
        <button onClick={onPatientSubmit} className="btn btn-success">Submit</button>

      </form>

      :

      <form action="">
        <label htmlFor="">Name</label>
        <input id="name" type="text" placeholder="Enter Name" for="name" name="name"/>
        
        <label htmlFor="">Doctor Id</label>
        <input id="doctorId" type="text" for="doctorId" name="doctorId" placeholder="Enter Doctor Id"/>
        
        <label htmlFor="">Password</label>
        <input type="text" type="password" name="password" name="password" id="password" />

        <label htmlFor="">Date Of Birth</label>
        <input id="dob" type="date" placeholder/>          
        
        <label htmlFor="">Age</label> <br/>
        <input id="age" type="number" placeholder="Enter Age"/> <br/>
        
        <label htmlFor="">Contact</label>
        <input id="contact" type="text" for="contact" name="contact" placeholder="Enter Your Number"/>
        
        <label htmlFor="">Email</label>
        <input id="email" type="text" for="email" name="email" placeholder="Enter Your Email"/>
        
        <label htmlFor="">Gender</label>
        <select id="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="">Hospital Name</label>
        <input type="text" id="hospitalName" name="hospitalName" placeholder="Enter Name of Your Hospital"/>

        <label htmlFor="">Specialisation</label>
        <input type="text" id="doctorType" name="doctorType" placeholder="Enter You Specialisation"/>

        <button onClick={onDoctorSubmit} className="btn btn-success">Submit</button>

      </form>
        

      }

    </div>
  </div>
    
  )
}

export default Register