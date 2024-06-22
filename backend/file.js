const fs = require('fs');


fs.writeFile('./temp.txt',"nishan sing222h",()=>{
    console.log("nishan singh 222");
});
fs.appendFile("./temp.txt","\nappended text",()=>{
    console.log("app");
})


console.log("nishan");