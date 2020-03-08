const express = require('express')
const router = express.Router()
const patientsService = require('../../../services/Patient/patients.service')

/* 
    METHOD: GET
    DESCRIPTION: GET ALL PATIENTS
    REQUEST: { }
    RESPONSE: {patients, error }
*/

router.get('/', async (req,res) => {
    try {
        const patients = await patientsService.fetchAll()
        res.status(200)
        res.send({patients, error: null})
    } catch (err) {
        res.status(500)
        res.send({patients: null, error: "Something Went Wrong"})
    }
})

module.exports = router