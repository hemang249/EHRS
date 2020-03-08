const dotenv = require('dotenv')
const env = dotenv.config({path: __dirname + '/../.env'})

if (!env) {
    console.log("Missing Environment ! Create a .env file from .env.example")
}

module.exports = {
    port: process.env.PORT,
    mongodbUrl: process.env.MONGODB_URL,
    patientSecret: process.env.PATIENT_SECRET,
    doctorSecret: process.env.DOCTOR_SECRET
}