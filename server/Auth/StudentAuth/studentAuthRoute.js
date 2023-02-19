const express = require('express')

const router = express.Router()

const {studentAuth, studentLogin} = require('./StudentModel')

router.post('/signup', studentAuth)

router.post('/login', studentLogin)

module.exports = router