const fs = require('fs');
const http = require('http');
const { stringify } = require('querystring');

const server=http.createServer((req,res)=>{
    console.log(req.url.includes("Nishan"));
    const x={name:"nishan",age:21,gender:"Male"};
    if(req.url.includes("getNishan")){
        res.end(stringify(x));
        return;
    }
    res.end("home page");
   
})

server.listen(8000,()=>{
    
    console.log("running..............");

})