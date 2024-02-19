require('dotenv').config();
const express = require('express');
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = 'mongodb+srv://' + process.env.MONGODB_USER + ':' + process.env.MONGODB_PASSWORD + '@cluster0.xbjnz.mongodb.net/' + process.env.MONGODB_DBNAME;
const postRouter = require('./routes/postRoute');

const app = express();

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(uri).then(()=>{
    console.log("MongoDB connected");
})


app.get('/', (req,res,next) => {
    res.send("Hello to prj1");
})

app.use('/post',postRouter);

app.get('/all', (req,res,next) => {
    res.send("this is all");
})

app.listen(3000, () =>{
    console.log("server started listening at port 3000");
})