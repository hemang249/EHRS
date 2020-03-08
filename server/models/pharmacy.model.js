const mongoose = require('mongoose')

const pharmacySchema = new mongoose.Schema({
    pharmacyId: {
        type: String,
        required: true
    },

    pharmacyName: {
        type: String,
        required: true
    },

    pharmacyContact: {
        type: String,
        required: true
    },

    password: {
        type:String,
        required: true
    }
})

const Pharmacy = mongoose.model('Pharmacy', pharmacySchema)

module.exports = Pharmacy