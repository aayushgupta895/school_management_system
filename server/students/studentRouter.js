const express = require('express')
const { 
    getStudentProfileById, 
    addNewStudent,
    StudentReportById,
} = require('./studentsController')

const router = express.Router()

function checkLogin(req, res, next){
    console.log("inside checklogin")
    next()
}

router.get('/', checkLogin, (req, res) =>{
    res.redirect('/profile')
})

router.get('/:studentId', getStudentProfileById)

router.post('/signup', checkLogin, addNewStudent)

router.get('/myReport/:studentId', StudentReportById)



module.exports = router