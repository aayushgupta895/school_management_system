const express = require('express')
const { 
    AllStudents,
    AllStudentsReport,
    StudentReportById,
    StudentById,
    PostStudentReport,
 } = require('../faculty/facultyController')


const router = express.Router()


router.get('/', (req, res) =>{
    res.redirect('/')
})

router.get('/getAllStudents', AllStudents)

router.get('/getStudentsReport', AllStudentsReport)

router.get('/myReport/:studentId', StudentReportById)

router.get('/getStudent/:studentId', StudentById)

router.post('/addReport/:studentId', PostStudentReport)

module.exports = router