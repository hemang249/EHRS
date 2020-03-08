const express = require ('express')
const config = require('./config')
const loader = require('./loaders/loader')
const port = config.port

/* This Function Will start the server on port specified in the .env */
const startServer = async () => {
    const app = express()

    // Load the necessary middleware
    loader(app)
    
    // Start the Server
    app.listen(8080, err => {
        if(err) {
            console.log("Server startup error : " + err)            
            process.exit(1)
            return
        } else {
            console.log("Server is Up and running on PORT " + 8080)
        }

    })
}

startServer()