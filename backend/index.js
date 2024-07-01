const express = require('express');
let data = require('./MOCK_DATA.json');
const app = express();
const fs = require('fs');
const { stringify } = require('querystring');
const mongoose = require('mongoose');
const { log, timeStamp } = require('console');

mongoose.connect('mongodb://127.0.0.1:27017/firstapp')
.then(()=> console.log("connected"))
.catch((err)=> console.log("error while connecting to DB ERR- ",err));


const userSchema = mongoose.Schema({
    firstName :{
        type: String,
        required : true,
    },
    lastName : {
        type: String,
        required : false
    },
    gender :{
        type: String
    },
    profession:{
        type: String
    },
    email :{
        required : true,
        unique : true,
        type: String
    }
}
,{timestamps : true});

const User = mongoose.model("user",userSchema);


app.use(express.json());
app.use(express.json({ extended: true }));
app.get('/api/users',(req,res)=>{
    // console.log(req.path);
    // const html = `${data.map((curr)=> "<h1> first Name - "+curr.first_name+"</h1>").join("")}`;
    res.send(data);

});



app.route('/users')
.get(async (req,res)=>{
    // console.log(req.path);
    const users = await User.find({});
    
   

    console.log(users);
    const html = `${users.map((curr)=> "<h1> first Name - "+curr.firstName+"</h1>  <h2> email - " + curr.email + "</h2>").join("")}`;
    return res.send(html);


    

})
.post(async (req,res)=>{
    
    const result = await User.create({
        firstName : req.body.first_name,
        lastName : req.body.last_name,
        gender : req.body.gender,
        email : req.body.email
    });

    console.log(result);

    return res.status(201).json({status: "success"});

    
    // let y=data[data.length-1].id;


   
    // // console.log(req.body);
    // data.push({id: y+1 , ...req.body});
    // fs.writeFile('./MOCK_DATA.json',JSON.stringify(data),(err)=>{
    //     console.log('error occurred!!');
    // })

    // res.status(202).json(y+1);
});

app.get('',(req,res)=>{
    // console.log(req.path);
    res.end("you are at HOME");
    
});

app.route('/user/:id').get(async (req,res)=>{

    const puser = await User.findById(req.params.id);


    return res.json(puser);


}).patch(async (req,res)=>{

   

    
    for(let x=0;x<data.length;x++){
        if(data[x].id==Number(req.params.id)){
            data[x].first_name = req.body.first_name;

        }
    }

    fs.writeFile('./MOCK_DATA.json',JSON.stringify(data),(err)=>{
        console.log('error occurred!!');
    })

   return res.status(203).json("done");


})
.put((req,res)=>{
    let y=Number(req.params.id);
    for (let index = 0; index < data.length; index++) {
        if(index==y-1){
            data[y-1]={id: data[y-1].id, ...req.body};
        }

        
    }

    fs.writeFile('./MOCK_DATA.json',JSON.stringify(data),(err)=>{
        console.log('error occurred!!');
    })

   return res.status(203).json("done");

})
.delete(async (req,res)=>{

    await User.findByIdAndDelete(req.params.id);
    
    return res.json("success");


    // data=data.filter((curr)=> curr.id!=Number(req.params.id));
    // fs.writeFile('./MOCK_DATA.json',JSON.stringify(data),(err)=>{
    //     console.log('error occurred!!');
    // });
    // res.setHeader('x-name','Nishan');

    // return res.status(203).json("done");
})


app.listen(8000,()=>{
    console.log("running\n");
})