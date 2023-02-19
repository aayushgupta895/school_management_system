const express = require('express')

const router = express.Router()

const {facultyAuth, facultyLogin} = require('./facultyModel')

router.post('/signup', facultyAuth)

router.post('/login', facultyLogin)

module.exports = router