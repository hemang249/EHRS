const Patient = require('../../models/patient.model')
const Doctor = require('../../models/doctor.model')

const registerPatient = async (patient) => {
    const newPatient = new Patient({
        name: patient.name,
        aadharId: patient.aadharId,
        gender: patient.gender,
        dob: patient.dob,
        password: patient.password,
        address: patient.address,
        contact: patient.contact,
        email: (patient.email ? patient.email : null),
        age: patient.age,
        
    })

    try {
        await newPatient.save()
    } catch (err) {
        throw new Error(err)
    }
}

const registerDoctor = async (doctor) => {
    const newDoctor = new Doctor({
        name: doctor.name,
        doctorId: doctor.doctorId,
        contact: doctor.contact,
        email: (doctor.email ? doctor.email : null),
        age: doctor.age,
        gender: doctor.gender,
        hospitalName: doctor.hospitalName,
        password: doctor.password,
        doctorType: doctor.doctorType
    })

    try {
        await newDoctor.save()
    } catch (err) {
        throw new Error(err)
    }
}

module.exports = {registerPatient, registerDoctor}