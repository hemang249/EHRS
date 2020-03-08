const express = require('express')
const router = express.Router()
const registerService = require('../../../services/Auth/register.service')

router.post('/', async (req,res) => {
    console.log(req.body)
    if(req.body.userType === 'patient') {
        try {
            await registerService.registerPatient(req.body.patient)
            res.status(200)
            res.send({patient: req.body.patient, error: null})   
        } catch (err) {
            console.log(err)
            res.status(500)
            res.send({patient: null, error: "Something Went Wrong!"})
        }
    } else if(req.body.userType === 'doctor') {
        try {
            await registerService.registerDoctor(req.body.doctor)
            res.status(200)
            res.send({doctor: req.body.doctor, error: null})
        } catch (err) {
            console.log(err)
            res.status(500)
            res.send({doctor: null, error: "Something Went Wrong!"})
        }
    }

})

module.exports = router