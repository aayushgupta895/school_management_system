const mongoose = require('mongoose')

const facultyAuthSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true,
        match : /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password : {
        type : String, 
        required : true,
    }
})

const FacultyAuthSchema = mongoose.model('facultyAuth', facultyAuthSchema)

module.exports = {
    FacultyAuthSchema,
}