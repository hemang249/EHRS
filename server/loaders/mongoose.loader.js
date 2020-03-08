const mongoose = require('mongoose')
const config = require('../config')

/* Exports a function that attempts a connection with the Mongodb */
module.exports = async () => {
        await mongoose.connect("mongodb://admin:admin@ehrs-shard-00-00-8pfh7.mongodb.net:27017,ehrs-shard-00-01-8pfh7.mongodb.net:27017,ehrs-shard-00-02-8pfh7.mongodb.net:27017/test?ssl=true&replicaSet=EHRS-shard-0&authSource=admin&retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).catch(err => {
        console.log(err)
    })
}