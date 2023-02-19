const express = require('express')

const router = express.Router()

const {studentAuth, studentLogin} = require('./StudentModel')

router.post('/studentAuth', studentAuth)

router.post('/studentLogin', studentLogin)

module.exports = router