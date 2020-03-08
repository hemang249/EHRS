const nodemailer = require('nodemailer')
const config = require('../../config')

const sendMail =  (disease, area) => {
    // Initialize a Nodemailer transporter
     let transporter = nodemailer.createTransport({
        host: "smtp.hostinger.in",
        port: 587,
        secure: false,
        auth: {
            user: config.email,
            pass: config.password 
        },
        tls: {rejectUnauthorized: false},
        debug: true,
    
     })   
     
     // Send off the verification mail to the user 
     transporter.sendMail({
         from: config.email,
         to: "hemang249@gmail.com",
         subject: "Disease Breakout Alert",
         text: "Please Be Aware, There is a breakout of " + disease + " in " + area
 
     })  
 
 
 }

 module.exports = {sendMail}