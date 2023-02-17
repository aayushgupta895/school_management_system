const {
    Faculty,
} = require('../MongoSchema')

function getAllFaculty(req, res){
    console.log("insde getAllFaculty")
    Faculty.find({})
    .then(docs =>{
        res.send(docs)
    })
    .catch(err =>{
        res.send( {
            error : err
        })
    })
}

function createNewFaculty(req, res){
    Faculty.create({
        name : req.body.name,
        department : req.body.department,
    })
    .then(docs =>{
        res.status(201).send(docs)
    })
    .catch(err =>{
        res.send({
            error : err
        })
    })
}

function facultyById(req, res){
    const id = req.params.facultyId
    Faculty.find({_id : id})
    .then(docs =>{
        res.status(200).send(docs)
    })
    .catch(err =>{
        res.send({
            error : err
        })
    })
}


module.exports = {
    getAllFaculty,
    createNewFaculty,
    facultyById,
}