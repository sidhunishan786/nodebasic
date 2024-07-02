const User = require('../models/users');


async function getAllUsers(req,res){
    const users = await User.find({});

    console.log(users);
    const html = `${users.map((curr)=> "<h1> first Name - "+curr.firstName+"</h1>  <h2> email - " + curr.email + "</h2>").join("")}`;
    return res.send(html);


}


async function getUserById(req,res){
    const puser = await User.findById(req.params.id);

    return res.json(puser);

}


async function createUser(req,res){
    
    const result = await User.create({
        firstName : req.body.first_name,
        lastName : req.body.last_name,
        gender : req.body.gender,
        email : req.body.email
    });
    console.log(result);

    return res.status(201).json({status: "success",id: result._id});


}

async function deleteUserById(req,res){

    await User.findByIdAndDelete(req.params.id);
    
    return res.json("success");
    
}


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUserById


}