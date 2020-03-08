const express = require('express')
const bodyParser =  require('body-parser')
const cookieParser = require('cookie-parser')
const path = require('path')
const config = require('../config')
const router = require('../api/routes')
const cors = require('cors')

/* Exports a function that will configure the express app */
module.exports = (app) => {
    app.use(cors())
    app.use(express.json())
    app.use(bodyParser.urlencoded({
        extended: true
    }))
    app.use(cookieParser())
    
    // const publicDir = path.join(__dirname, '../../../client/public')
    // app.use(express.static(publicDir))

   app.use('/', router)    
 
}