const express = require('express')
const { 
    getStudentProfileById, 
    addNewStudent,
    StudentReportById,
    
} = require('./studentsController')

const {verifyStudent} = require('../Auth/StudentAuth/StudentModel')
const router = express.Router()

function checkLogin(req, res, next){
    console.log("inside checklogin")
    next()
}

router.get('/', checkLogin, (req, res) =>{
    res.redirect('/profile')
})

router.get('/:studentId', verifyStudent, getStudentProfileById)

router.post('/register',  verifyStudent, addNewStudent)

router.get('/myReport/:studentId', verifyStudent, StudentReportById)

// router.get('/faculties', FacultyAvailable)



module.exports = router