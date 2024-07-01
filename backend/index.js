const express = require('express');
let data = require('./MOCK_DATA.json');
const app = express();
const fs = require('fs');
const { stringify } = require('querystring');

app.use(express.json());
app.use(express.json({ extended: true }));
app.get('/api/users',(req,res)=>{
    // console.log(req.path);
    // const html = `${data.map((curr)=> "<h1> first Name - "+curr.first_name+"</h1>").join("")}`;
    res.send(data);

});



app.route('/users')
.get((req,res)=>{
    // console.log(req.path);
    const html = `${data.map((curr)=> "<h1> first Name - "+curr.first_name+"</h1>").join("")}`;
    res.send(html);

})
.post((req,res)=>{
    let y=data[data.length-1].id;
   
    // console.log(req.body);
    data.push({id: y+1 , ...req.body});
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(data),(err)=>{
        console.log('error occurred!!');
    })

    res.status(202).json(y+1);
});

app.get('',(req,res)=>{
    // console.log(req.path);
    res.end("you are at HOME");
    
});

app.route('/user/:id').get((req,res)=>{
    return res.json(data.filter((curr)=> curr.id===Number(req.params.id)));
}).patch((req,res)=>{
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
.delete((req,res)=>{
    data=data.filter((curr)=> curr.id!=Number(req.params.id));
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(data),(err)=>{
        console.log('error occurred!!');
    });
    res.setHeader('x-name','Nishan');

    return res.status(203).json("done");
})


app.listen(8000,()=>{
    console.log("running\n");
})