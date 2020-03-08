const express = require('express')
const router = express.Router()
const loginService = require('../../../services/Auth/login.service')

router.post('/', (req,res) => {
    console.log(req.body)
    if (req.body.userType === 'patient') {
        loginService.loginPatient(req.body.aadharId, req.body.password, (patient, token, error) => {
            if(error) {
                res.status(401)
                res.send({
                    patient: null,
                    error: error
                })
            } else {
                res.status(200)
                res.send({
                    patient: patient,
                    error: null
                })
                res.cookie('jwt', token, {httpOnly: true})
            }
        })
    } else if (req.body.userType === 'doctor') {
        loginService.loginDoctor(req.body.doctorId, req.body.password, (doctor, token, error) => {
            if(error) {
                res.status(401)
                res.send({
                    doctor: null,
                    error: error
                })
            } else {
                res.cookie('jwt', token, {httpOnly: true})
                res.status(200)
                res.send({
                    doctor: doctor,
                    error: null
                })

               
            }
        })    
    }
})

module.exports = router