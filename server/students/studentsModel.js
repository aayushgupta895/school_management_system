const {
    Student,
} = require('../MongoSchema')


function studentProfileById(req, res, next){
    const id = req.params.studentId
    Student.findOne({_id : id})
    .exec()
    .then(docs =>{
        console.log(docs);
        res.status(200).send(docs);
    })
    .catch(err =>{
        console.log(err)
        res.send(err);
    })
}


function getAllStudentsReport(req, res, next){    //  from faculty router
    Student.find({}, {_id : 0, scholar_no : 0 , subject : 0})
    .exec()
    .then(docs =>{
        res.status(200).send(docs)
    })
    .catch(err =>{
        console.log(err)
        res.send({
            "error" : err
        })
    })
}


function getAllStudents(req, res, next){    // from faculty router
    Student.find({})
    .then(docs =>{
        res.status(200).send(docs)
    })
    .catch(err =>{
        res.send(err)
    })
}


async function createNewStudent(req, res, next){
    const data = req.body
    const scholarFound = await Student.find({scholar_no : data.scholar_no})
    console.log(scholarFound.length)

    if(scholarFound.length != 0){
        console.log(scholarFound)
        res.send({
            error : "scholar no already exist"
        })
        return
    }else{
        const checkClassRoll = await Student.find({class : data.class, class_roll_no : data.class_roll_no})
        if(checkClassRoll.length != 0){
            console.log(checkClassRoll, " checkClassRoll")
            res.send({
                error : "Student with class or roll no already exist"
            })
            return
        }
    }

    Student.create({
        firstName : req.body.firstName,
        surname : req.body.surname,
        scholar_no : req.body.scholar_no, 
        class_roll_no : req.body.class_roll_no, 
        class : req.body.class, 
        subject : req.body.subject, 
    })
    .then(docs =>{
        console.log("new student creation successful")
        res.status(201).send(docs)
    })
    .catch(err =>{
        console.log("error while creating new student "+err)
        res.send({
            error : "could not save the new Student"
        })
    })
}
             

function studentsReport(req, res){
    const id  = req.params.studentId
    Student.find({_id : id}, {report : 1})
    .then(docs =>{
        res.status(200).send(docs)
    })
    .catch(err =>{
        res.send({
            error : err
        })
    })
}   


function addStudentReport(req, res){
    const id = req.params.studentId
    const body = req.body
    Student.findByIdAndUpdate({_id : id},{$set : {"report.Maths" : body.Maths, "report.Science" : body.Science}})
    .then(docs =>{
        res.status(201).send({
            Success : "Success"
        })
    })
    .catch(err =>{
        res.send({
            error : err
        })
    })

}
    

module.exports = {
    studentProfileById, 
    createNewStudent,
    getAllStudents,
    studentsReport,
    getAllStudentsReport,
    addStudentReport,
}