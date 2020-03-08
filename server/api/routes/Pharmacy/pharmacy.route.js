const express = require('express')
const router = express.Router()
const url = require('url')
const queryString = require('querystring')
const patientDataService = require('../../../services/Patient/patient-data.service')

router.get('/', async (req,res) => {
    try {
        const queryData = url.parse(req.url).query    
        const q = queryString.parse(queryData)
        const p = await patientDataService.getPatientData(q.aadharId)

    } catch(err) {

    }
})

module.exports = router