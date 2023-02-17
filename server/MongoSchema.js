const mongoose = require('mongoose')

const student = new mongoose.Schema({
        firstName : {
            type : String,
            required : true,
        },
        surname : {
            type : String,
            required : true
        },
        scholar_no : {
            type : Number,
            required : true,
            unique : true
        },
        class_roll_no : {
            type : Number,
            required : true,
            unique : true,
        },
        class : {
            type : Number,
            required : true
        },
        subject : {
            type : String,
            required : true
        },    // Math or Science
        report : {
            Maths : {
                type : Number,
                default : "yet to be declared"
            },
            Science : {
                type : Number,
                default : "yet to be decalred"
            }
        }
    }
)
//     firstName : {
//     type : String,
//     required : true,
//     unique : true
//     },
//     faveFoods : [{type : String}],
//     info : {
//         school : {
//             type : String,
//         },
//         class : {
//             type : Number
//         }
//     },
//     school : {
//         type : mongoose.Schema.Types.ObjectId,
//         required : true,
//         ref : 'school',
//     }
// }, {timestamps : true})



const department = new mongoose.Schema({
    name : {
        type : String,
    },
    total_students_enrolled : {
        type : Number,
    },
    total_faculty : {
        type : Number,
    },
    students : {
        type : Array
    },
    faculty : {
        type : Array
    }
})

const faculty = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    faculty_id : {
        type : String,
        requied : true,
        unique : true,
    },
    department : {
        type : String,
        requied : true,
    }

})


/////////////////virtual///////////////
// schema.virtual('staffCount').get(
//     function(){
//         return this.school.staff.length
//     }
// )
///////////////////////////////////////
let Faculty = mongoose.model("faculty", faculty)
let Student = mongoose.model("student", student)
let Department = mongoose.model("department", department)



module.exports = {
    Student,
    Faculty,
    Department,
}