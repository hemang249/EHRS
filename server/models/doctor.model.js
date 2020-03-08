const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    doctorId: {
        type: String,
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
        required: false
    },

    gender: {
        type: String,
        required: true
    },

    hospitalName: {
        type: String,
        required: false
    },
     
    doctorType: {
        type: String,
        required: false
    },

    password: {
        type: String,
        required: true
    }

})

const Doctor = mongoose.model('Doctor', doctorSchema)

module.exports = Doctor