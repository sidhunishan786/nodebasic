


async function getNishan() {
    let x = await fetch("http://localhost:8000/home");
    x= await x.json();
    console.log(x);
    
}