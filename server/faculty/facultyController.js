const {
    getAllStudents,
    getAllStudentsReport,
    studentsReport,
    addStudentReport,
 } = require('../students/studentsModel')

function AllStudents(req, res){ 
    const allStudents = getAllStudents(req, res)
}

function AllStudentsReport(req, res){
    const allStudentsReport = getAllStudentsReport(req, res)
}

function StudentReportById(req, res){
    const reportById = studentsReport(req, res)
}

function StudentById(req, res){
    const studentById = studentProfileById(req, res)
}

function PostStudentReport(req, res){
    const postStudentReport = addStudentReport(req, res)
}

module.exports = {
    AllStudents,
    AllStudentsReport,
    StudentReportById,
    StudentById,
    PostStudentReport,
}