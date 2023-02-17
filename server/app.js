const express = require('express')
const path = require('path')
const morgan = require('morgan');
const {connectMongo, disconnectMongo} = require('./mongo')
const student_route = require('./students/studentRouter')
const faculty_route = require('./faculty/facultyRouter')
const bodyParser = require("body-parser")
// const {connectMongoClient} = require('./transaction')
const PORT = 3500
const app = express()
app.use(
    express.urlencoded({ extended: true })
)

app.use(express.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(morgan('dev'))


async function connectingMongo(){
    await connectMongo()
}

async function startServer(){
    // await connectMongoClient()
    await connectingMongo() 
    app.listen(PORT, ()=>{ console.log(`listening on the port ${PORT}`)})
}



app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

function checkConnection(req, res, next){
    console.log("inside checkconnection")
    next()
}

app.use('/auth/student', checkConnection, student_route)

app.use('/auth/faculty', faculty_route)

startServer().catch((e)=>(console.log(e)));