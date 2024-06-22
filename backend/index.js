const fs = require('fs');
const http = require('http');
const { stringify } = require('querystring');
const url = require('url');

const server=http.createServer((req,res)=>{
 
    const myURL = url.parse((req.url));
    // console.log(myURL, " is my URL");
    console.log(myURL.path);

    console.log(req.method);

    
    res.end("path in address bar is "+ myURL.path);
   
})

server.listen(8000,()=>{
    
    console.log("running..............");

})