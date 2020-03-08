const mongooseLoader = require('./mongoose.loader')
const expressLoader =  require('./express.loader')
const config = require('../config')

/* Exports a Function to load up all the required Middlewares */
module.exports = async (app) => {
    await mongooseLoader()
    await expressLoader(app)
}