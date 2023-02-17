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



const router = express.Router()


router.get('/', (req, res) =>{
    res.redirect('/')
})

router.get('/getAllStudents', AllStudents)

router.get('/getStudentsReport', AllStudentsReport)

router.get('/myReport/:studentId', StudentReportById)

router.get('/getStudent/:studentId', StudentById)

router.post('/addReport/:studentId', PostStudentReport)

////////for faculty

router.post('/signup', AddFaculty)

router.get('/signup/:facultyId', MyFacultyId)

router.get('/faculties', FacultyAvailable)

module.exports = router