const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    aadharId: {
        type: String,
        required: true,
        unique: true
    },

    gender: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },    

    dob: {
        type: String,
        required: true
    },

    address: {
        type: {
            addressLine: {
                type:String,
                required: true
            },

            locality: {
                type: String,
                required: true
            },

            city: {
                type: String,
                required: true
            },

            state: {
                type: String,
                required: true
            }
        },

        required: true
    },

    contact: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: false
    },

    age: {
        type: Number,
        required: true
    },

    allergies: {
        type: [String],
        required: false
    },

    bloodType: {
        type: String,
        required: false
    },

    currentMedication: {
        type: [String],
        required: false
    },

    chronicDisease: {
        type: [String],
        required: false
    },

    history: {
        type: [{
            visitTime: {
                type: String,
                required: true
            },

            doctorId: {
                type: String,
                required: true
            },

            hospitalName: {
                type: String,
                required: true
            },

            diagnosis: {
                type: String,
                required: true
            },

            medicines: {
                type: [String],
                required: false
            }

            
        }],

        required: false
    }

})

const Patient = mongoose.model('Patient', patientSchema)

module.exports = Patient