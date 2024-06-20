const fs = require('fs');
const http = require('http');

const server=http.createServer((req,res)=>{
    var data=Date.now().toString()+"\n";
    fs.appendFile('./temp.txt',data,()=>{

    });
    res.end("appended file");
    console.log(req);
})

server.listen(8000,()=>{
    
    console.log("running..............");

})