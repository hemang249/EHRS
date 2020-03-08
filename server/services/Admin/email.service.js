const nodemailer = require('nodemailer')

const sendMail =  (disease, area) => {
    // Initialize a Nodemailer transporter
     let transporter = nodemailer.createTransport({
        host: "smtp.hostinger.in",
        port: 587,
        secure: false,
        auth: {
            user: "hemangb@xlearno.com",
            pass: "hemangb@xlearno" 
        },
        tls: {rejectUnauthorized: false},
        debug: true,
    
     })   
     
     // Send off the verification mail to the user 
     transporter.sendMail({
         from: `hemangb@xlearno.com`,
         to: "hemang249@gmail.com",
         subject: "Disease Breakout Alert",
         text: "Please Be Aware, There is a breakout of " + disease + " in " + area
 
     })  
 
 
 }

 module.exports = {sendMail}