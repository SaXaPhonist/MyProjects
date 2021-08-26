import express from 'express'
import mongoose from 'mongoose'
import router from './router'
import fileUpload from 'express-fileupload'
import {json} from 'body-parser'
import cors from 'cors'

const path = require('path')

const PORT = Number(process.env.PORT) || 7000
const HOST = '0.0.0.0'
const DB_URL = 'mongodb+srv://user1:user1@clusterfornodejs.71bfz.mongodb.net/EnglishLearn?retryWrites=true&w=majority'
const app = express()


app.use(express.json())
app.use(json())
app.use(cors())
app.use('/api', router)
app.use(fileUpload({}))

async function StartApp() {
 try {
    await mongoose.connect(DB_URL,{useUnifiedTopology: true, useNewUrlParser: true})
    app.listen(PORT ,HOST ,() => {
        console.log(`server is running on ${PORT}`);
        
    })  
 } catch (error) {
     console.log(error);
     
 }
       
}

StartApp()
