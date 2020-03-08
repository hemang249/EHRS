const express = require('express')
const router = express.Router()
const emailService = require('../../../services/Admin/email.service')
const url = require('url')
const queryString = require('querystring')

router.get('/', (req,res) => {
    try {
        const queryData = url.parse(req.url).query    
        const q = queryString.parse(queryData)
        console.log(req.body)
        emailService.sendMail(q.disease, q.city)
        res.status(200)
        res.redirect('http://localhost:3000/doctor')
    } catch (err) {
        console.log(err)
    }
})

module.exports = router