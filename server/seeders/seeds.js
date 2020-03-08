const mongooseLoader = require('../loaders/mongoose.loader')
const seedPatients = require('./data')

const seedData = async () => {
    await mongooseLoader()
    await seedPatients()
}   

seedData()

