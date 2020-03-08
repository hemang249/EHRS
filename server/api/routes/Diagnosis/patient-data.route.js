const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const config = require('../../../config')
const patientDataService = require('../../../services/Patient/patient-data.service')
const url = require('url')
const queryString = require('querystring')

/* 
* Route: /api/patient-data
* Method: GET
* Desc: Retrieve a patients data for the doctor
* Request: {aadharId}
* Response: {patient, error}
*/


router.get('/', async (req,res) => {
    
    const queryData = url.parse(req.url).query    
    
    const q = queryString.parse(queryData)
    console.log(q.aadharId)
    const patient = await patientDataService.getPatientData(q.aadharId)

    if(!patient) {
        res.status(200)
        res.send({patient: null, error: "No Such Patient was found"})
    } else {
        res.status(200)
        res.send({patient: patient, error: null})
    }

})

/* 
* Route: /api/patient-data
* Method: POST
* Desc: Update patients data for the doctor
* Request: {patient}
* Response: {patient, updated,  error}
*/

router.post('/', (req,res) => {
    

  

    try {
        var updated = patientDataService.updatePatientData(req.body.patient)
    } catch(err) {
        res.status(500)
        res.send({
            patient: null,
            updated: null,
            error: "Something went wrong! Try Again!"
        })
    }
    
    if(!updated) {
        res.status(200)
        res.send({
            patient: null,
            updated: false,
            error: null
        })
    } else {
        res.status(200)
        res.send({
            patient: req.body.patient,
            updated: true,
            error: null
        })
    }

})


module.exports = router