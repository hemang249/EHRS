const express = require('express')
const router = express.Router()

const AreaAnalyseRouter = require('./routes/Admin/city-analyse.route')
const RegisterRouter = require('./routes/Auth/register.route')
const LoginRouter = require('./routes/Auth/login.route')
const PatientDataRouter = require('./routes/Diagnosis/patient-data.route')
const DiseaseAnalysisRouter = require('./routes/Admin/disease-analyse.route')
const MailRouter = require('./routes/Admin/email.route')

router.use('/api/register', RegisterRouter)
router.use('/api/login', LoginRouter)
router.use('/api/patient-data', PatientDataRouter)
router.use('/api/disease-analyse', DiseaseAnalysisRouter)
router.use('/api/area-analyse', AreaAnalyseRouter)
router.use('/api/email', MailRouter)

module.exports = router