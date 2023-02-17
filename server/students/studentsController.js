const {
    studentProfileById,
    createNewStudent,
    studentsReport,
    } = require('./studentsModel')
    


function getStudentProfileById(req, res){
    const profile = studentProfileById(req, res)
    
}

function addNewStudent(req, res){
    console.log("here")
    const NewStudent = createNewStudent(req, res);  
}


function StudentReportById(req, res){
    const report = studentsReport(req, res)
}





module.exports = {
    getStudentProfileById, 
    addNewStudent,
    StudentReportById,
   
}