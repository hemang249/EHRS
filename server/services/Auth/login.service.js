const Patient = require('../../models/patient.model')
const Doctor = require('../../models/doctor.model')
const jwt = require('jsonwebtoken')
const config = require('../../config')

const loginPatient = async (aadharId, password, callback) => {
    const patient = await Patient.findOne({
        aadharId: aadharId
    })

    if(!patient) {  
        callback(null, null, "No Such User Exists")
    } else {
        console.log(patient)
        if(patient.password !== password) {
            callback(null, null, "Incorrect Password !")
        } else {
            const token = jwt.sign({aadharId}, "sadhuwq9561-*/")  
            callback(patient, token, null)
        }
    }
}

const loginDoctor = async (doctorId, password, callback) => {
    const doctor = await Doctor.findOne({
        doctorId: doctorId
    })

    if(!doctor) {
        callback(null, null, "No Such Doctor Found !")
    } else {
        if(doctor.password === password) {
            const token = jwt.sign({doctorId}, "asdhu23468.10")
            callback(doctor, token, null)
        } else {
            callback(null,null, "Incorrect Password !")
        }
    }
}


module.exports = {loginPatient, loginDoctor}