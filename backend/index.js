const express = require('express');
const data = require('./MOCK_DATA.json');
const app = express();


app.get('/api/users',(req,res)=>{
    // console.log(req.path);
    // const html = `${data.map((curr)=> "<h1> first Name - "+curr.first_name+"</h1>").join("")}`;
    res.send(data);

});

let arr=[]

app.route('/users').get((req,res)=>{
    // console.log(req.path);
    const html = `${data.map((curr)=> "<h1> first Name - "+curr.first_name+"</h1>").join("")}`;
    res.send(html);

})
.post((req,res)=>{
    arr.push(req.body);
    console.log(arr);
    res.json(arr.length);
});

app.get('',(req,res)=>{
    // console.log(req.path);
    res.end("you are at HOME");
    
});

app.route('/user/:id').get((req,res)=>{
    return res.json(data.filter((curr)=> curr.id===Number(req.params.id)));
}).patch((req,res)=>{
    return res.send("done");
})


app.listen(8000,()=>{
    console.log("running\n");
})