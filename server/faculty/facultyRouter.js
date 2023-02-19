const express = require('express')
const { 
    AllStudents,
    AllStudentsReport,
    StudentReportById,
    StudentById,
    PostStudentReport,
    AddFaculty,
    MyFacultyId,
    FacultyAvailable,
 } = require('../faculty/facultyController')

const {verifyFaculty} = require('../Auth/FacultyAuth/facultyModel')

const router = express.Router()


router.get('/', (req, res) =>{
    res.redirect('/')
})

router.get('/getAllStudents',verifyFaculty, AllStudents)

router.get('/getStudentsReport',verifyFaculty, AllStudentsReport)

router.get('/myReport/:studentId', verifyFaculty, StudentReportById)

router.get('/getStudent/:studentId', verifyFaculty, StudentById)

router.post('/addReport/:studentId', verifyFaculty, PostStudentReport)

////////for faculty

router.post('/register', verifyFaculty, AddFaculty)

router.get('/signedIn/:facultyId', verifyFaculty, MyFacultyId)

router.get('/faculties', verifyFaculty, FacultyAvailable)

module.exports = router