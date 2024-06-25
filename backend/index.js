const express = require('express');

const app = express();

app.get('/home',(req,res)=>{
    // console.log(req.path);
    res.json("you are at "+ req.path);

});

app.get('',(req,res)=>{
    // console.log(req.path);
    res.end("you are at "+ req.path);
    
});


app.listen(8000,()=>{
    console.log("running\n");
})