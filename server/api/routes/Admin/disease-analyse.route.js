const express = require('express')
const router = express.Router()
const patientsService = require('../../../services/Patient/patients.service')
const url = require('url')
const queryString = require('querystring')

/* 
    METHOD: GET
    DESCRIPTION : FILTER DATA WRT DISEASE
    REQUEST : {disease}
    RESPONSE : {patients, error}   
*/

router.get('/', async (req,res) => {
    try {
        const queryData = url.parse(req.url).query    
        const q = queryString.parse(queryData)
        const patients = await patientsService.fetchByDisease(q.disease)
        console.log(patients)
        res.status(200)
        res.send({patients, error: null})
    } catch (err) {
        console.log(err)
        res.status(500)
        res.send({patients: null, error: "Something Went Wrong!"})
    }
})

module.exports = router