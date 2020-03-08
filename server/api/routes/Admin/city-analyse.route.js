const express = require('express')
const router = express.Router()
const patientsService = require('../../../services/Patient/patients.service')
const url = require('url')
const queryString = require('querystring')

/* 
    METHOD: GET
    REQUEST: {city}
    RESPONSE: {patients}

*/ 

router.get('/', async (req, res) => {
    try {
        const queryData = url.parse(req.url).query    
        const q = queryString.parse(queryData)
        
        const patients = await patientsService.fetchByArea(q.city)
        const metrics = await patientsService.fetchDiseaseStat(patients)
        
        res.status(200)
        res.send({patients,metrics, error: null})
    } catch (err) {
        console.log(err)
        res.status(500)
        res.send({patients: null, error: "Something Went wrong"})
    }
})

module.exports = router