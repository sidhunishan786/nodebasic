const express = require('express');
const app = express();
const fs = require('fs');
require('dotenv').config();
const {connectToMongoDB} = require('./connections.js');
const Router = require('./routes/user.js');
const User = require('./models/users.js');


connectToMongoDB(process.env.DBURL).then(()=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log("cannot connect to DB ERR- ",err);
});


app.use(express.json());
app.use(express.json({ extended: true }));

app.use('/user',Router);
app.get('',(req,res)=>{
    // console.log(req.path);
    res.end("you are at HOME");
    
});

app.listen(8000,()=>{
    console.log("running\n");
})