const Patient  = require('../../models/patient.model')

const getPatientData = async (aadharId) => {
    const patient = await Patient.findOne({aadharId})

    if(!patient) {
        return null
    } else {
        return patient
    }
}

const updatePatientData = async (patient) => {
    
    try {
        const patient = await Patient.findOneAndUpdate({aadharId: patient.aadharId}, {
            allergies: patient.allergies,
            currentMedication: patient.currentMedication,
            chronicDisease: patient.chronicDisease,
            history: patient.history
        })
    } catch(err) {
        throw new Error(err)
    }

    if(!patient) {
        return false
    } else {
        return true
    }
}

module.exports = {getPatientData, updatePatientData}