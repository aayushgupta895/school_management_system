const bodyParser = require("body-parser")
const express = require('express')
const morgan = require('morgan');
const {connectMongo} = require('./mongo')
const studentAuthRoute = require('./Auth/StudentAuth/studentAuthRoute')
const facultyAuthRoute = require('./Auth/FacultyAuth/facultyAuthRoute')
const studentRoute = require('./students/studentRouter')
const facultyRoute = require('./faculty/facultyRouter')

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

app.use('/auth/student',  studentRoute)

app.use('/auth/faculty', facultyRoute)

app.use('/students/auth', studentAuthRoute)

app.use('/faculty/auth', facultyAuthRoute)

startServer().catch((e)=>(console.log(e)));