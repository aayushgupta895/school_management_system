const {
    studentProfileById,
    createNewStudent,
    studentsReport,
    } = require('./studentsModel')
    
const {
    getAllFaculty,
} = require('../faculty/facultyModel')

function getStudentProfileById(req, res){
    console.log("inside studentProfileById")
    const profile = studentProfileById(req, res)
    
}

function addNewStudent(req, res){
    console.log("here")
    const NewStudent = createNewStudent(req, res);  
}


function StudentReportById(req, res){
    const report = studentsReport(req, res)
}

function FacultyAvailable(req, res){
    const facultyAvailable = getAllFaculty(req, res)
}



module.exports = {
    getStudentProfileById, 
    addNewStudent,
    StudentReportById,
    FacultyAvailable,
}