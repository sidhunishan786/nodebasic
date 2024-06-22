const { stringify } = require("querystring");

async function getNishan() {
    const x = await fetch("http://localhost:8000/getNishan");
    x= await x.json();
    console.log(stringify(x));
    
}