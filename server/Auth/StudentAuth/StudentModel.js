const {StudentAuthSchema} = require('./studentAuthSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()


function studentAuth(req, res){
    StudentAuthSchema.find({ email : req.body.email})
    .then(docs =>{
        if(docs.length >= 1){
            res.send({
                error : "email already exists"
            })
        }else{
            bcrypt.hash(req.body.password, 10, function(err, hash) {
                if(err){
                    return res.status(500).send({
                        error : err
                    })
                }else{
                    console.log(hash , " hashed password")
                    StudentAuthSchema.create({
                        email : req.body.email,
                        password : hash
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
            });
        }
    })
    .catch(err =>{
        res.send({
            error : err
        })
        
    })
}


function studentLogin(req, res){
    StudentAuthSchema.findOne({email : req.body.email})
    .then(doc =>{
        console.log(doc)
        if(doc){
            bcrypt.compare(req.body.password, doc.password, function(err, result) {
                if(err){
                    return res.send({
                        message : "Auth failed"
                    }) 
                }else{
                    if(result){
                        const token = jwt.sign({
                            email : doc.email,
                            id : doc._id
                        },
                        process.env.SECRET_KEY,
                        {
                            expiresIn : "1h"
                        })
                        return res.status(200).send({
                            "token" : token,
                            "message" : "Auth success"
                        })
                    }
                    res.send({
                        message : "Auth failed"
                    })
                }
            });
        }else{
            return res.status(500).send({
                message : "Auth failed"
            })
        }
    })
    .catch(err =>{
        console.log(err)
        return res.status(500).send({
            error : err
        })
    })
}


function verifyStudent(req, res, next){
    try {
        const token = req.headers.authorization.split(" ")[1]
        console.log(token, "token") 
        const decoded = jwt.verify(token, process.env.SECRET_KEY)  
        console.log(decoded, "decoded")
        req.userData  = decoded
        next() 
    } catch (error) {
        return res.status(401).send({
            message : 'Auth failed'
        })
    }

}


module.exports = {
    studentAuth,
    studentLogin,
    verifyStudent,
}