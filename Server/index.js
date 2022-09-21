const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const db = require('./Database/connection')
const dotenv = require("dotenv");
dotenv.config();


const app = express()
const router = require('./routes/router')
const corsOptions = {
    origin: '*'
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use((err,req,res,next)=>{  
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,  
        stack:err.stack
    })
}) 
app.use('/', router)


db.on('error', console.error.bind(console, 'Mongodb connection failed'))

app.listen(7000, () => {
    console.log('server running on '+7000)
})
